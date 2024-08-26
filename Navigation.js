import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";



import HomeScreen from "./src/screens/HomeScreen";
import AlojamientoScreen from "./src/screens/AlojamientoScreen";
import LugarScreen from "./src/screens/LugarScreen";
import VuelosScreen from "./src/screens/VuelosScreen";
import MapsGoogleScreen from "./src/screens/MapsGoogleScreen";
import RegisterScreen from "./src/screens/RegisterScreen";


const Tab = createBottomTabNavigator();

function MyTabs() { 
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Google Maps" component={MapsGoogleScreen} />
            <Tab.Screen name="Alojamiento" component={AlojamientoScreen} />
            <Tab.Screen name="Lugar" component={LugarScreen} />
            <Tab.Screen name="Vuelos" component={VuelosScreen} />
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