import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_DEFAULT } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

export function Map() {
   return (
      <MapView
         provider={PROVIDER_DEFAULT}
         className='w-full h-full rounded-2xl'
         tintColor='black'
         mapType='mutedStandard'
         showsPointsOfInterest={false}
         //  initialRegion={region}
         showsUserLocation={true}
         userInterfaceStyle='light'
      ></MapView>
   );
}
