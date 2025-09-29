// This function calls our internal API route to get recommendations
export const getRecommendations = async (profile) => {
  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ profile, type: 'recommendations' }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `API error: ${response.statusText}`);
    }

    const data = await response.json();
    // Return the array that is nested inside the 'recommendations' key
    return data.recommendations;
  } catch (error) {
    console.error('Failed to fetch recommendations:', error);
    throw error; // Re-throw the error to be caught by the component
  }
};

// This function calls our internal API route to get tip details
export const getRecommendationDetails = async (recommendation) => {
   try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recommendation, type: 'details' }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `API error: ${response.statusText}`);
    }

    const data = await response.json();
    // Return the object that is nested inside the 'details' key
    return data.details;
  } catch (error) {
    console.error('Failed to fetch recommendation details:', error);
    throw error;
  }
};