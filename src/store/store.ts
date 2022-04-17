import create from 'zustand';
const useStore = create((set: any) => ({
  isDark: false,
  toggleIsDark: (): any => set((state: any) => ({ isDark: !state.isDark })),
}));

export default useStore;
