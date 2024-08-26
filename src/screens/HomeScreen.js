import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Pressable, } from "react-native";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const LoginScreen = () => {
  const mochejaIcon = require("./../../assets/mochejalogopng.png");
return (
    <View style={styles.container}>
      <StatusBar style="auto" />



      <View style={{width:'95%', flexDirection:'row', backgroundColor:'skyblue', justifyContent:"center"}}>
        
        <Image
          source={mochejaIcon}
          style={{ width: 80, height: 90, resizeMode: "contain" }}
        />

        <View style={{flexDirection:"column"}}>
          <FontAwesome6 name="bell" style={{fontSize:15, paddingLeft:2}} />
          <Text>Hola</Text>
        </View>
      </View>

    </View>
  );
};

export default LoginScreen;





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: 'column',
    paddingHorizontal: 15, 
    width:'100%',
  },
});
