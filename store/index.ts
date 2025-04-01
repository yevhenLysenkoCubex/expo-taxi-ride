import { create } from 'zustand';

import { DriverStore, LocationStore, MarkerData } from '@/types/type';

// const useStore = create((set) => ({
//    bears: 0,
//    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//    removeAllBears: () => set({ bears: 0 }),
//    updateBears: (newBears) => set({ bears: newBears }),
// }));

export const useLocationStore = create<LocationStore>((set) => ({
   userAddress: null,
   userLongitude: null,
   userLatitude: null,

   destinationAddress: null,
   destinationLatitude: null,
   destinationLongitude: null,

   setUserLocation: ({ latitude, longitude, address }: { latitude: number; longitude: number; address: string }) => {
      set(() => ({
         userLatitude: latitude,
         userLongitude: longitude,
         userAddress: address,
      }));

      // if driver is selected and now new location is set, clear the selected driver
      const { selectedDriver, clearSelectedDriver } = useDriverStore.getState();
      if (selectedDriver) clearSelectedDriver();
   },

   setDestinationLocation: ({
      latitude,
      longitude,
      address,
   }: {
      latitude: number;
      longitude: number;
      address: string;
   }) => {
      set(() => ({
         userLatitude: latitude,
         userLongitude: longitude,
         userAddress: address,
      }));

      // if driver is selected and now new location is set, clear the selected driver
      const { selectedDriver, clearSelectedDriver } = useDriverStore.getState();
      if (selectedDriver) clearSelectedDriver();
   },
}));

export const useDriverStore = create<DriverStore>((set) => ({
   drivers: [] as MarkerData[],
   selectedDriver: null,

   setSelectedDriver: (driverId: number) => set(() => ({ selectedDriver: driverId })),
   setDrivers: (drivers: MarkerData[]) => set(() => ({ drivers })),
   clearSelectedDriver: () => set(() => ({ selectedDriver: null })),
}));
