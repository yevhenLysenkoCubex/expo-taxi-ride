import { Stack } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AuthLayout() {
   return (
      <Stack
         screenOptions={{ headerShown: false }}
         initialRouteName='welcome'
         screenLayout={({ children }) => <ScreenLayout>{children}</ScreenLayout>}
      >
         <Stack.Screen name='sign-in' />
         <Stack.Screen name='sign-up' />
         <Stack.Screen name='welcome' />
      </Stack>
   );
}

function ScreenLayout({ children }: { children: React.ReactNode }) {
   return <SafeAreaView className='flex-1 bg-white'>{children}</SafeAreaView>;
}
