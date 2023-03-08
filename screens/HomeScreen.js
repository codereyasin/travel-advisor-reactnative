import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeAreaView from "../components/SafeAreaView";
import { HeroImage } from "../assets";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      {/* Fast Section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center  justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">
          Good Moments
        </Text>

        <Text className="text-[#3C6072] text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          accusamus.
        </Text>
      </View>

      {/* Circle Section */}
      <View className="w-[400px] h-[400px] bg-[#00BCC9] rounded-full -right-36"></View>
      <View className="w-[400px] h-[400px] bg-[#E99265] rounded-full -bottom-[290px] absolute -left-36"></View>
      {/* Image Container */}
      <View className="flex-1 items-center justify-center absolute -bottom-[50px] left-[20px]">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          className="w-[340px] h-[430px] object-cover"
          source={HeroImage}
        />

        <TouchableOpacity
        onPress={() => navigation.navigate("Discover")}
        className="absolute bottom-16 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center">
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
