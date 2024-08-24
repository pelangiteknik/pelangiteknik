import { create } from 'zustand'

export const useStore = create((set) => ({
    searchTerm: '',
    setSearchTerm: (e) => set(() => ({ searchTerm: e })),
}))