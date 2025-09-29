import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req) {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    console.error("🔴 FATAL: GEMINI_API_KEY is not set. Please ensure .env.local is in the project root and restart the server.");
    return NextResponse.json(
      { error: "Server configuration error: The API key is missing." },
      { status: 500 }
    );
  }

  try {
    const { type, profile, recommendation } = await req.json();
    console.log(`🔵 Received API request for type: "${type}"`);

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    if (type === 'recommendations' && profile) {
      const prompt = `You are a helpful and positive wellness coach. Generate 5 unique, short, and actionable wellness tips for a user with the following profile:
      - Age: ${profile.age}
      - Gender: ${profile.gender}
      - Primary Goal: "${profile.goal}"

      For each tip, provide a unique ID (e.g., "stress_1", "fitness_2"), a short title (3-4 words), a one-sentence summary, and a category from this list: [Reduce Stress, Improve Fitness, Eat Healthier, Better Sleep, Mindfulness].
      Return the output as a valid JSON array of objects. Do not include any markdown formatting, backticks, or the word "json". The output must be only the JSON array itself.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      const cleanedText = text.replace(/```json/g, '').replace(/```/g, '');
      const recommendations = JSON.parse(cleanedText);

      console.log("🟢 Successfully generated recommendations.");
      // IMPORTANT: Return the data wrapped in a `recommendations` key
      return NextResponse.json({ recommendations });

    } else if (type === 'details' && recommendation) {
      const prompt = `You are a helpful and positive wellness coach. A user wants more details about the following wellness tip:
      - Title: "${recommendation.title}"
      - Summary: "${recommendation.summary}"
      - Category: "${recommendation.category}"

      Please provide a more detailed explanation of why this tip is beneficial ("fullDescription") and a list of 3-5 simple, actionable steps the user can take ("steps").
      Return the output as a single valid JSON object with two keys: "fullDescription" (a string) and "steps" (an array of strings). Do not include any markdown formatting, backticks, or the word "json". The output must be only the JSON object itself.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      const cleanedText = text.replace(/```json/g, '').replace(/```/g, '');
      const details = JSON.parse(cleanedText);

      console.log("🟢 Successfully generated details for:", recommendation.title);
      // IMPORTANT: Return the data wrapped in a `details` key
      return NextResponse.json({ details });
    }
    
    return NextResponse.json({ error: 'Invalid request type or missing data' }, { status: 400 });

  } catch (error) {
    console.error("🔴 Error in /api/generate:", error);
    return NextResponse.json(
      { error: "An error occurred on the server.", details: error.message },
      { status: 500 }
    );
  }
}
