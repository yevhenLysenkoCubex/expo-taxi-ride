import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TabIcon } from '@/components/tab-icon';
import { icons } from '@/constants';

export default function TabsLayout() {
   return (
      <Tabs
         initialRouteName='home'
         screenOptions={{
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#fff',
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
            headerShown: false,
         }}
         screenLayout={({ children }) => <ScreenLayout>{children}</ScreenLayout>}
      >
         <Tabs.Screen
            name='home'
            options={{
               tabBarIcon: ({ focused }) => <TabIcon source={icons.home} focused={focused} />,
            }}
         />
         <Tabs.Screen
            name='rides'
            options={{
               tabBarIcon: ({ focused }) => <TabIcon source={icons.list} focused={focused} />,
            }}
         />
         <Tabs.Screen
            name='chat'
            options={{
               tabBarIcon: ({ focused }) => <TabIcon source={icons.chat} focused={focused} />,
            }}
         />
         <Tabs.Screen
            name='profile'
            options={{
               tabBarIcon: ({ focused }) => <TabIcon source={icons.profile} focused={focused} />,
            }}
         />
      </Tabs>
   );
}

function ScreenLayout({ children }: { children: React.ReactNode }) {
   return <SafeAreaView className='flex-1 bg-general-500'>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
   tabBar: {
      backgroundColor: '#333333',
      borderRadius: 50,
      // paddingBottom: 0, // ios only
      overflow: 'hidden',
      marginHorizontal: 20,
      marginBottom: 20,
      height: 78,
      // justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      position: 'absolute',
   },
});
