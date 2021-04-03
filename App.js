import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import EventScreen from "./screens/EventScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Accordion } from "react-native-paper";
import { Appbar } from "react-native-paper";



const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home";
            } else if (route.name === "Event") {
              iconName = focused ? "ios-list" : "ios-list";
            } else if (route.name === "Contact") {
              iconName = focused ? "ios-call" : "ios-call";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={"blue"} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "brown",
          inactiveTintColor: "brown",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Event" component={EventScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
