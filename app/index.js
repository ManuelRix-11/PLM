import React from 'react';
import ContactsScreen from '../screens/ContactsScreen.js';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen.js';
import FAQScreen from '../screens/FAQScreen.js';
import HeaderComponent from '../components/HeaderComponent.js';
import AppuntiScreen from '../screens/AppuntiScreen.js';

const Stack = createStackNavigator();

function MainContainer() {
  return (
    <Stack.Navigator  
    initialRouteName='Home' >
        <Stack.Screen name='Home' component={HomeScreen} options={{header: () => HeaderComponent("Benvenuto")}}></Stack.Screen>
        <Stack.Screen name='Contattaci' component={ContactsScreen} ></Stack.Screen>
        <Stack.Screen name='FAQ' component={FAQScreen}></Stack.Screen>
        <Stack.Screen name='Appunti' component={AppuntiScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}

// AppRegistry.registerComponent('MyApp', () => MainContainer);
export default MainContainer;