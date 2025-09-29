'use client';

import { ProfileForm } from '@/components/ProfileForm';
import { useStore } from '@/store/useStore';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const setProfile = useStore((state) => state.setProfile);
  const router = useRouter();

  const handleProfileSubmit = (profile) => {
    setProfile(profile);
    router.push('/recommendations');
  };

  return (
    <div className="container mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Welcome to</span>
          <span className="block text-primary">WellnessAI</span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
          Tell us a bit about yourself to get personalized wellness tips generated just for you.
        </p>
      </div>
      <div className="mt-12 w-full">
        <ProfileForm onSubmit={handleProfileSubmit} />
      </div>
    </div>
  );
}
