import { useAuth } from '@clerk/clerk-expo';
import { Redirect } from 'expo-router';

export default function Screen() {
   const { isSignedIn } = useAuth();

   if (isSignedIn) return <Redirect href='/(root)/(tabs)/home' />;

   return <Redirect href='/(auth)/welcome' />;
}
