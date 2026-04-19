import { create } from 'zustand';

const useChatStore = create((set) => ({
  messages: [],
  isLoading: false,
  error: null,

  // Actions
  addMessage: (message) => 
    set((state) => ({ 
      messages: [...state.messages, { ...message, id: Date.now() }] 
    })),

  setLoading: (loading) => set({ isLoading: loading }),

  setError: (error) => set({ error: error }),

  clearHistory: () => set({ messages: [] }),
}));

export default useChatStore;
