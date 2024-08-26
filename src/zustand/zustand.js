import { create } from 'zustand'

export const useStore = create((set) => ({
    searchTerm: '',
    setSearchTerm: (e) => set(() => ({ searchTerm: e })),

    searchTermClose: false,
    setSearchTermClose: () => set((state) => ({ searchTermClose: !state.searchTermClose })),

    productMelayangHeader: false,
    setProductMelayangHeader: () => set((state) => ({ productMelayangHeader: !state.productMelayangHeader })),
}))