import { Image, ImageSourcePropType, View } from 'react-native';

export function TabIcon({ source, focused }: { source: ImageSourcePropType; focused: boolean }) {
   return (
      <View className={`flex flex-row justify-center items-center rounded-full ${focused ? 'bg-general-300' : ''}`}>
         <View className={`rounded-full w-12 h-12 items-center justify-center ${focused ? 'bg-general-400' : ''}`}>
            <Image source={source} tintColor='white' resizeMode='contain' className='w-7 h-7' />
         </View>
      </View>
   );
}
