'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bookmark, Heart, Zap, Dumbbell, Leaf, Moon, BrainCircuit } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { motion } from 'framer-motion';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from 'lucide-react';
import { getRecommendationDetails } from '@/lib/aiService';


function RecommendationDetail({ isOpen, onClose, recommendation }) {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen && recommendation) {
      setIsLoading(true);
      setDetails(null);
      getRecommendationDetails(recommendation)
        .then((data) => {
          setDetails(data);
        })
        .catch((err) => {
          console.error("Failed to get details:", err);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }
  }, [isOpen, recommendation]);

  if (!recommendation) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] flex flex-col max-h-[85dvh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{recommendation.title}</DialogTitle>
           <Badge variant="secondary" className="w-fit">{recommendation.category}</Badge>
          <DialogDescription>{recommendation.summary}</DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex-1 overflow-y-auto pr-2">
          {isLoading ? (
            <div className="space-y-4 pt-4">
              <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
              <div className="h-4 w-3/4 animate-pulse rounded bg-muted"></div>
              <div className="mt-6 h-4 w-1/2 animate-pulse rounded bg-muted"></div>
              <div className="h-4 w-full animate-pulse rounded bg-muted"></div>
            </div>
          ) : (
            details && (
              <div className="space-y-4">
                <p className="text-sm text-foreground">{details.fullDescription}</p>
                <div>
                  <h4 className="mb-2 font-semibold">Step-by-step Advice:</h4>
                  <ul className="space-y-2">
                    {details.steps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

const iconMap = {
  'Reduce Stress': BrainCircuit,
  'Improve Fitness': Dumbbell,
  'Eat Healthier': Leaf,
  'Better Sleep': Moon,
  'Mindfulness': Heart,
  Default: Zap,
};

export function RecommendationCard({ recommendation }) {
  const { savedTips, saveTip, unsaveTip } = useStore();
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const isSaved = savedTips.some((tip) => tip.id === recommendation.id);
  const Icon = iconMap[recommendation.category] || iconMap.Default;

  const handleSaveToggle = (e) => {
    e.stopPropagation(); // Prevent card click when saving
    if (isSaved) {
      unsaveTip(recommendation.id);
    } else {
      saveTip(recommendation);
    }
  };

  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Card
          className="flex h-full cursor-pointer flex-col overflow-hidden transition-shadow hover:shadow-lg"
          onClick={() => setIsDetailOpen(true)}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{recommendation.title}</CardTitle>
            <Button variant="ghost" size="icon" onClick={handleSaveToggle} className="h-8 w-8">
              <Bookmark className={`h-4 w-4 ${isSaved ? 'fill-primary text-primary' : ''}`} />
            </Button>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col items-center justify-center text-center">
            <Icon className="mb-4 h-12 w-12 text-primary" />
            <p className="text-xs text-muted-foreground">{recommendation.summary}</p>
          </CardContent>
        </Card>
      </motion.div>
      <RecommendationDetail
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        recommendation={recommendation}
      />
    </>
  );
}