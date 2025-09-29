'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const wellnessGoals = [
  'Reduce Stress',
  'Improve Fitness',
  'Eat Healthier',
  'Better Sleep',
  'Mindfulness',
];

export function ProfileForm({ onSubmit }) {
  const [profile, setProfile] = useState({
    age: '',
    gender: '',
    goal: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfile((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id, value) => {
    setProfile((prev) => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!profile.age || profile.age <= 0 || profile.age > 120) {
      newErrors.age = 'Please enter a valid age.';
    }
    if (!profile.gender) {
      newErrors.gender = 'Please select a gender.';
    }
    if (!profile.goal) {
      newErrors.goal = 'Please select a wellness goal.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(profile);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Your Wellness Profile</CardTitle>
          <CardDescription>This helps us personalize your recommendations.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input id="age" type="number" placeholder="e.g., 30" value={profile.age} onChange={handleChange} />
            {errors.age && <p className="text-sm text-destructive">{errors.age}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select onValueChange={(value) => handleSelectChange('gender', value)}>
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && <p className="text-sm text-destructive">{errors.gender}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="goal">Primary Wellness Goal</Label>
            <Select onValueChange={(value) => handleSelectChange('goal', value)}>
              <SelectTrigger id="goal">
                <SelectValue placeholder="Select a goal" />
              </SelectTrigger>
              <SelectContent>
                {wellnessGoals.map((goal) => (
                  <SelectItem key={goal} value={goal}>
                    {goal}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.goal && <p className="text-sm text-destructive">{errors.goal}</p>}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Get Recommendations</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
