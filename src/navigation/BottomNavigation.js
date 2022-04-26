import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import DefaultTabScreen from "../screens/DefaultTabScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Icon from 'react-native-vector-icons/FontAwesome'
import EmojiScreen from "../screens/EmojiScreen";

const Tab = createBottomTabNavigator()

const BottomNavigator = () => {
    return <Tab.Navigator
        initialRoutename={"Home"}
        screenOptions={{ headerShown: false }}
    >
        <Tab.Screen
            name="Home"
            component={DefaultTabScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" size={size} color={color} />
                )
            }}></Tab.Screen>
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="user" size={size} color={color} />
                )
            }}
        ></Tab.Screen>
        <Tab.Screen
            name="Emoji"
            component={EmojiScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="etsy" size={size} color={color} />
                )
            }}></Tab.Screen>
    </Tab.Navigator>

}

export default BottomNavigator