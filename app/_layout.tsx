import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { LogBox } from 'react-native';
import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';

import '../global.css';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

if (!publishableKey) {
   throw new Error('Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env');
}

LogBox.ignoreLogs(['Clerk:']);

export default function RootLayout() {
   const [loaded] = useFonts({
      SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
   });

   useEffect(() => {
      if (loaded) {
         SplashScreen.hideAsync();
      }
   }, [loaded]);

   if (!loaded) {
      return null;
   }

   return (
      <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
         <ClerkLoaded>
            <Stack screenOptions={{ headerShown: false }}>
               <Stack.Screen name='index' />
               <Stack.Screen name='(auth)' />
               <Stack.Screen name='(root)' />
               <Stack.Screen name='+not-found' />
            </Stack>
         </ClerkLoaded>
      </ClerkProvider>
   );
}
