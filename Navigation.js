import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";

import HomeScreen from "./src/screens/HomeScreen";
import AlojamientoScreen from "./src/screens/AlojamientoScreen";
import LugarScreen from "./src/screens/LugarScreen";
import VuelosScreen from "./src/screens/VuelosScreen";
import MapsGoogleScreen from "./src/screens/MapsGoogleScreen";
import RegisterScreen from "./src/screens/RegisterScreen";

import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

function MyTabs() { 
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#046002',
            }}
        >
            <Tab.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel:'Inicio',
                    tabBarIcon: ({color, size}) => (
                        <Octicons name="home" color={color} size={size - 6}/>
                    ),
                    headerShown: false
                }}
            />


            <Tab.Screen
                name="Google Maps"
                component={MapsGoogleScreen}
                options={{
                    tabBarLabel:'Mapa',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="map-outline" color={color} size={size - 6}/>
                    ),
                    headerShown: false
                }}
                />

            <Tab.Screen
                name="Alojamiento"
                component={AlojamientoScreen}
                options={{
                    tabBarLabel:'Alojamiento',
                    tabBarIcon: ({color, size}) => (
                        <Fontisto name="hotel" color={color} size={size - 6}/>
                    ),
                    headerShown: false
                }}
                
                />


            <Tab.Screen
                name="Lugar"
                component={LugarScreen}
                options={{
                    tabBarLabel:'Destino',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="map-marker-outline" color={color} size={size - 5}/>
                    ),
                    headerShown: false
                }}
                
                />
            <Tab.Screen
                name="Vuelos"
                component={VuelosScreen}
                
                options={{
                    tabBarLabel:'Vuelos',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="airplane-outline" color={color} size={size - 6}/>
                    ),
                    headerShown: false
                }}
                />
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}