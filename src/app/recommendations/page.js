'use client';

import { useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { getRecommendations } from '@/lib/aiService';
import { RecommendationCard } from '@/components/RecommendationCard';
import { Button } from '@/components/ui/button';
import { RotateCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from "sonner"
// We need these components for the skeleton
import { Card, CardContent, CardHeader } from '@/components/ui/card';

// --- FINAL FIX: COMPONENT MOVED IN-FILE ---
// To bypass the persistent "Module not found" error, the RecommendationSkeleton
// component code is now defined directly inside this file.
function RecommendationSkeleton() {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="h-4 w-3/4 animate-pulse rounded-md bg-muted"></div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col items-center justify-center">
        <div className="mb-4 h-12 w-12 animate-pulse rounded-full bg-muted"></div>
        <div className="h-3 w-full animate-pulse rounded-md bg-muted"></div>
        <div className="mt-2 h-3 w-5/6 animate-pulse rounded-md bg-muted"></div>
      </CardContent>
    </Card>
  );
}
// --- END OF FIX ---


export default function RecommendationsPage() {
  const { profile, recommendations, setRecommendations, isLoading, setIsLoading, error, setError } = useStore();

  const fetchRecommendations = async () => {
    if (!profile) return;
    setIsLoading(true);
    setError(null);
    try {
      const tips = await getRecommendations(profile);
      setRecommendations(tips);
    } catch (err) {
      setError('Failed to fetch recommendations. Please try again.');
      toast.error("API Error", {
        description: "Failed to fetch recommendations. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (recommendations.length === 0) {
      fetchRecommendations();
    }
  }, [profile]); 

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl font-bold tracking-tight">Your Wellness Board</h1>
          <p className="text-muted-foreground">Here are 5 AI-generated tips based on your profile.</p>
        </div>
        <Button onClick={fetchRecommendations} disabled={isLoading}>
          <RotateCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          Regenerate
        </Button>
      </div>

      <div className="mt-8">
        {error && <p className="text-center text-destructive">{error}</p>}
        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {isLoading ? (
              Array.from({ length: 5 }).map((_, index) => <RecommendationSkeleton key={index} />)
            ) : (
              recommendations.map((rec) => <RecommendationCard key={rec.id} recommendation={rec} />)
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

