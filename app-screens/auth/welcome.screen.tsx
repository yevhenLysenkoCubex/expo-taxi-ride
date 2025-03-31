import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Swiper from 'react-native-swiper';

import { CustomButton } from '@/components/custom-button';
import { onboarding } from '@/constants';

export function WelcomeScreen() {
   const router = useRouter();
   const swiperRef = useRef<Swiper>(null);
   const [activeIndex, setActiveIndex] = useState(0);

   const isLastSlide = activeIndex === onboarding.length - 1;

   return (
      <View className='flex-1 justify-between'>
         <TouchableOpacity
            onPress={() => {
               router.replace('/(auth)/sign-up');
            }}
            className='p-5 items-end'
         >
            <Text className='text-black text-md font-bold'>Skip</Text>
         </TouchableOpacity>

         <Swiper
            ref={swiperRef}
            loop={false}
            dot={<View className='w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full' />}
            activeDot={<View className='w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full' />}
            onIndexChanged={(index) => setActiveIndex(index)}
         >
            {onboarding.map((item) => (
               <View key={item.id} className='flex items-center justify-center p-5'>
                  <Image source={item.image} className='w-full h-[300px]' resizeMode='contain' />
                  <View className='flex flex-row items-center justify-center w-full mt-10'>
                     <Text className='text-black text-3xl font-bold mx-10 text-center'>{item.title}</Text>
                  </View>
                  <Text className='text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3'>
                     {item.description}
                  </Text>
               </View>
            ))}
         </Swiper>

         <CustomButton
            title={isLastSlide ? 'Get Started' : 'Next'}
            onPress={() => (isLastSlide ? router.replace('/(auth)/sign-up') : swiperRef.current?.scrollBy(1))}
            className='w-4/5 mt-10 self-center'
         />
      </View>
   );
}
