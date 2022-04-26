import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DefaultScreen from "../screens/DefaultScreen"
import LogInScreen from "../screens/LogInScreen"
import SignUpScreen from "../screens/SignUp";
import BottomNavigator from "./BottomNavigation";
import EmojiScreen from "../screens/EmojiScreen";


const Stack = createNativeStackNavigator()

const MainStackNavigator = () => {


    return <NavigationContainer>
        <Stack.Navigator initialRoutename={"Default"} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Default" component={DefaultScreen}></Stack.Screen>
            <Stack.Screen name="LogIn" component={LogInScreen}></Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUpScreen}></Stack.Screen>
            <Stack.Screen name="Bottom" component={BottomNavigator}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
}

export default MainStackNavigator