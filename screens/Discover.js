import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SafeAreaView from '../components/SafeAreaView';
import {Avatar} from '../assets'
const Discover = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
   <SafeAreaView>
     <View className="flex-row items-center justify-between px-8">
      <View>
        <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
        <Text className="text-[#527283] text-[36px]">the beauty today</Text>
      </View>

      <View className="w-12 h-12 bg-gray-400  rounded-md items-center justify-center shadow-lg">
        <Image source={Avatar} className="w-full h-full rounded-md object-cover"/>
      </View>
     </View>

     <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
     <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
      query={{
        key: "AIzaSyAxnhJ5tGKjV2d0IngOhOde6Hc0QWDRoJg",
        language: 'en',
      }}
    />

      </View>

   </SafeAreaView>
  )
}

export default Discover