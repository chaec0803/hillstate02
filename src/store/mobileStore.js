import create from 'zustand';

const mobileStore = create((set) => ({
  isOpenMobileTab: false,
  toggleMobileTab: () =>
    set((state) => ({ isOpenMobileTab: !state.isOpenMobileTab })),
}));

export default mobileStore;
