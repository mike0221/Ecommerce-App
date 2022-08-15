import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screen/HomeScreen';


const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator
  screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: 'blue',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
    }}
  >
    <Drawer.Screen
      name="Home"
      component={TabStackScreen}
    />
    <Drawer.Screen name="Add Product" component={HomeScreen} />
    <Drawer.Screen name="Edit Product" component={HomeScreen} />

  </Drawer.Navigator>
);


const TabStack = createBottomTabNavigator();
const TabStackScreen = () => (
  <TabStack.Navigator
  screenOptions={{
    headerShown: false,
  }}>

    <TabStack.Screen  name="Shop" component={HomeScreen} 
     options={{
        
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Ionicons name="home-outline" color='black' size={26} />
        ),
        
      }}
    />

    <TabStack.Screen
        name="Cart"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-outline" color='black' size={26} />
          ),
        }}
      />
  </TabStack.Navigator>
);

const Stack = createNativeStackNavigator();
const StackScreen = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Drawers" component={DrawerScreen} />
      <Stack.Screen name="Single Product" component={HomeScreen} />
      <Stack.Screen name="Create Product" component={HomeScreen} />
    </Stack.Navigator>
  );

 


const HomeStack = () =>{

    return <StackScreen />;

}

export default HomeStack