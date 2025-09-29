export const MOCK_TIPS = [
  {
    id: 'stress_1',
    title: 'Mindful Breathing',
    summary: 'A 5-minute exercise to calm your mind and reduce anxiety.',
    category: 'Reduce Stress',
  },
  {
    id: 'fitness_1',
    title: 'Morning Stretch',
    summary: 'Start your day with simple stretches to boost energy and flexibility.',
    category: 'Improve Fitness',
  },
  {
    id: 'nutrition_1',
    title: 'Hydration Challenge',
    summary: 'Drink 8 glasses of water today to improve focus and organ function.',
    category: 'Eat Healthier',
  },
  {
    id: 'sleep_1',
    title: 'Digital Detox',
    summary: 'Avoid screens for 1 hour before bed to enhance sleep quality.',
    category: 'Better Sleep',
  },
  {
    id: 'mindfulness_1',
    title: 'Gratitude Journal',
    summary: 'List three things you are grateful for to foster a positive mindset.',
    category: 'Mindfulness',
  },
  {
    id: 'fitness_2',
    title: 'Bodyweight Circuit',
    summary: 'A 15-minute HIIT workout you can do anywhere, no equipment needed.',
    category: 'Improve Fitness',
  },
  {
    id: 'nutrition_2',
    title: 'Add One Veggie',
    summary: 'Incorporate one extra serving of vegetables into your dinner tonight.',
    category: 'Eat Healthier',
  },
  {
    id: 'stress_2',
    title: 'Nature Walk',
    summary: 'Spend 20 minutes walking outside to lower cortisol levels.',
    category: 'Reduce Stress',
  },
];

export const MOCK_TIP_DETAILS = {
  stress_1: {
    fullDescription:
      'Mindful breathing is a powerful technique to anchor yourself in the present moment. By focusing on your breath, you can interrupt the cycle of anxious thoughts and activate your body\'s relaxation response.',
    steps: [
      'Find a comfortable, quiet place to sit or lie down.',
      'Close your eyes gently and place one hand on your belly.',
      'Inhale slowly through your nose for a count of four, feeling your belly rise.',
      'Hold your breath for a count of four.',
      'Exhale slowly through your mouth for a count of six, feeling your belly fall.',
      'Repeat this cycle for at least 5 minutes.',
    ],
  },
  fitness_1: {
    fullDescription:
      'Starting your day with a stretching routine can awaken your muscles, improve circulation, and set a positive tone for the day. It helps relieve stiffness from sleep and prepares your body for daily activities.',
    steps: [
      'Stand with feet shoulder-width apart and reach your arms overhead.',
      'Hold a gentle "cat-cow" stretch on all fours to warm up your spine.',
      'Perform neck rolls gently, side to side.',
      'Stretch your hamstrings by reaching for your toes (don\'t force it).',
      'Finish with a torso twist to mobilize your core.',
    ],
  },
  nutrition_1: {
    fullDescription:
      'Proper hydration is essential for nearly every function in your body. It regulates body temperature, keeps joints lubricated, and improves cognitive function. Many people operate in a state of mild dehydration without realizing it.',
    steps: [
      'Start your day with a large glass of water upon waking.',
      'Keep a reusable water bottle with you throughout the day.',
      'Set reminders on your phone or computer to drink water.',
      'Infuse your water with lemon, cucumber, or mint for flavor.',
      'Eat water-rich foods like watermelon, oranges, and salads.',
    ],
  },
  sleep_1: {
    fullDescription:
      'The blue light emitted by screens (phones, tablets, TVs) can suppress the production of melatonin, the hormone that regulates sleep. A digital detox before bed helps your brain wind down naturally.',
    steps: [
      'Set a "digital curfew" at least 60-90 minutes before your intended bedtime.',
      'Charge your devices outside of your bedroom.',
      'Replace screen time with relaxing activities like reading a book, listening to calm music, or taking a warm bath.',
      'Use "night mode" or blue-light-filtering apps if you must use a screen.',
    ],
  },
  mindfulness_1: {
    fullDescription:
      'Practicing gratitude has been scientifically shown to improve mental health, reduce stress, and increase feelings of happiness. By consciously focusing on the positive, you can rewire your brain for optimism.',
    steps: [
      'Find a dedicated notebook or use a notes app.',
      'Each evening, write down three specific things that went well during the day.',
      'It can be something big (a promotion) or small (a delicious cup of coffee).',
      'Reflect for a moment on why you are grateful for each item.',
      'Try to be specific and avoid repeating the same things every day.',
    ],
  },
   // Add details for the other tips
  fitness_2: {
    fullDescription: 'A High-Intensity Interval Training (HIIT) circuit is a fast and effective way to boost your metabolism and improve cardiovascular health. It involves short bursts of intense exercise followed by brief recovery periods.',
    steps: [
      'Warm-up for 3 minutes (e.g., jogging in place, jumping jacks).',
      'Perform each exercise for 45 seconds, followed by 15 seconds of rest.',
      'Exercises: Jumping Jacks, Squats, Push-ups, Lunges, Plank.',
      'Complete the entire circuit 3 times.',
      'Cool down with 2 minutes of light stretching.'
    ]
  },
  nutrition_2: {
    fullDescription: 'Adding more vegetables to your diet is a cornerstone of healthy eating. They are packed with vitamins, minerals, and fiber, which are crucial for good health and disease prevention.',
    steps: [
      'Choose a vegetable you enjoy. It can be fresh, frozen, or canned.',
      'Prepare it in a healthy way: steam, roast, or stir-fry it.',
      'Add it as a side dish to your main meal or mix it into a sauce, soup, or stew.',
      'Aim to have half of your plate filled with fruits and vegetables at every meal.',
    ]
  },
  stress_2: {
    fullDescription: 'Spending time in nature, also known as "ecotherapy," is a proven way to reduce stress, anxiety, and rumination. It helps lower blood pressure and the stress hormone cortisol.',
    steps: [
      'Find a nearby park, green space, or even a quiet, tree-lined street.',
      'Leave your phone on silent to minimize distractions.',
      'Walk at a comfortable pace for at least 20 minutes.',
      'Pay attention to your senses: the sights, sounds, and smells of nature around you.',
    ]
  },
};
