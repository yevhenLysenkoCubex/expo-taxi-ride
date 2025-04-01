import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
   ...config,
   name: 'Taxi',
   slug: 'taxi',
   version: '1.0.0',
   orientation: 'portrait',
   icon: './assets/images/icon.png',
   scheme: 'myapp',
   userInterfaceStyle: 'automatic',
   newArchEnabled: true,
   ios: {
      supportsTablet: true,
   },
   android: {
      adaptiveIcon: {
         // foregroundImage: './assets/images/adaptive-icon.png',
         backgroundColor: '#ffffff',
      },
   },
   web: {
      bundler: 'metro',
      output: 'server',
      // favicon: './assets/images/favicon.png',
   },
   plugins: [
      ['expo-router', { origin: 'https://taxi.com' }],
      [
         'expo-splash-screen',
         {
            image: './assets/images/splash.png',
            // imageWidth: 200,
            resizeMode: 'contain',
            backgroundColor: '#2f80ed',
         },
      ],
      [
         'expo-location',
         {
            locationAlwaysAndWhenInUsePermission: 'Allow $(PRODUCT_NAME) to use your location.',
         },
      ],
   ],
   experiments: {
      typedRoutes: true,
   },
});
