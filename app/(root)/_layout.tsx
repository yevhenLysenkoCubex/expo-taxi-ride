import { Stack } from 'expo-router';

export default function RootLayout() {
   return (
      <Stack screenOptions={{ headerShown: false }}>
         <Stack.Screen name='(tabs)' />
         <Stack.Screen name='find-ride' />
         <Stack.Screen name='confirm-ride' />
         <Stack.Screen name='book-ride' />
      </Stack>
   );
}
