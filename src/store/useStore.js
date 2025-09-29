import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

/**
 * @typedef {object} Tip
 * @property {string} id
 * @property {string} title
 * @property {string} summary
 * @property {string} category
 */

/**
 * @typedef {object} Profile
 * @property {string} age
 * @property {string} gender
 * @property {string} goal
 */

/**
 * @typedef {object} StoreState
 * @property {Profile | null} profile
 * @property {Tip[]} recommendations
 * @property {Tip[]} savedTips
 * @property {boolean} isLoading
 * @property {string | null} error
 * @property {(profile: Profile) => void} setProfile
 * @property {(recommendations: Tip[]) => void} setRecommendations
 * @property {(tip: Tip) => void} saveTip
 * @property {(tipId: string) => void} unsaveTip
 * @property {(isLoading: boolean) => void} setIsLoading
 * @property {(error: string | null) => void} setError
 */

/** @type {import('zustand').UseBoundStore<import('zustand').StoreApi<StoreState>>} */
const useStore = create(
  persist(
    (set) => ({
      // State
      profile: null,
      recommendations: [],
      savedTips: [],
      isLoading: false,
      error: null,

      // Actions
      setProfile: (profile) => set({ profile }),
      setRecommendations: (recommendations) => set({ recommendations }),
      
      saveTip: (tip) => set((state) => ({ savedTips: [...state.savedTips, tip] })),
      
      unsaveTip: (tipId) => set((state) => ({ savedTips: state.savedTips.filter((tip) => tip.id !== tipId) })),
      
      setIsLoading: (isLoading) => set({ isLoading }),
      
      setError: (error) => set({ error }),
    }),
    {
      name: 'wellness-ai-storage', // Name for the localStorage key
      storage: createJSONStorage(() => localStorage), // Use localStorage
      partialize: (state) => ({ savedTips: state.savedTips }), // Only persist savedTips
    }
  )
);

export { useStore };
