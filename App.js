import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Discover, HomeScreen } from "./screens";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen  name="Home" component={HomeScreen} />
            <Stack.Screen  name="Discover" component={Discover} />
          </Stack.Navigator>
        </NavigationContainer>
    </TailwindProvider>
  );
}
