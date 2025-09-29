'use client';

import { useStore } from '@/store/useStore';
import { RecommendationCard } from '@/components/RecommendationCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Info } from 'lucide-react';

export default function SavedPage() {
  const savedTips = useStore((state) => state.savedTips);

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl font-bold tracking-tight sm:text-left">Your Saved Tips</h1>
      <p className="mt-2 text-center text-muted-foreground sm:text-left">
        Revisit your favorite wellness advice anytime.
      </p>

      <div className="mt-8">
        {savedTips.length > 0 ? (
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
            {savedTips.map((tip) => (
              <RecommendationCard key={tip.id} recommendation={tip} />
            ))}
          </motion.div>
        ) : (
          <div className="mt-16 flex flex-col items-center justify-center text-center">
             <div className="rounded-full bg-secondary p-4">
                <Info className="h-12 w-12 text-primary" />
             </div>
            <h2 className="mt-6 text-2xl font-semibold">No Saved Tips Yet</h2>
            <p className="mt-2 text-muted-foreground">
              Explore some recommendations and save the ones you love!
            </p>
            <Link href="/recommendations" passHref>
              <button className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Find Recommendations
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
