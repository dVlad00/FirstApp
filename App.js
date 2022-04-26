import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";
import { Text, View } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DefaultScreen from "./src/screens/DefaultScreen";
import MainStackNavigator from "./src/navigation/Navigator"
import { store, persistor } from "./src/redux/store/store"

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    
  
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainStackNavigator>
        </MainStackNavigator>
      </PersistGate>
    </Provider>)
  

}





export default App