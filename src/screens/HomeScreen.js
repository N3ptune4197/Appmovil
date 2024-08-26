import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Pressable, } from "react-native";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
  const mochejaIcon = require("./../../assets/mochejalogopng.png");
return (


    <View style={styles.container}>
      <StatusBar style="auto" />





      <View style={{width:'95%', flexDirection:'row', justifyContent:"center", alignItems:"center", marginTop:25, marginBottom:10}}>
        <View style={{justifyContent:"flex-start", backgroundColor:"#fff", width:"36%"}}>
          <Pressable>
            <FontAwesome6 name="bars" size={23}/>
          </Pressable>
        </View>

        <View style={{justifyContent:"center", backgroundColor:"#fff"}}>
          <Image
            source={mochejaIcon}
            style={{ width: 80, height: 90, resizeMode: "contain" }}
          />
        </View>

        <View style={{flexDirection:"row", alignItems:"center", alignContent:"center", justifyContent:"flex-end", backgroundColor:"#fff", width:"36%" }}>
          <FontAwesome6 name="bell" style={{fontSize:23, paddingRight:43}} />
          <FontAwesome6 name="user" style={{fontSize:23}} />
        </View>
      </View>




      <View style={{width:"90%", alignItems:"center", backgroundColor:"white", marginBottom:30}}>

        <Text style={{fontSize:25, fontWeight:"600", marginBottom:20 }}>Lugares Turísticos</Text>

        <View style={{width:"100%", flexDirection:"row", alignItems:"center", justifyContent:"center", alignContent:"space-between", backgroundColor:"white" }} >

          <TextInput style={{width:'80%', height:33, marginBottom:10, backgroundColor:'#E4E4E4', borderRadius:5, textAlignVertical:'center', fontSize:15, textAlign:"center" }} placeholder="Buscar" />
          <Ionicons name="search" style={{borderColor:"black", justifyContent:"flex-end", paddingBottom:13, fontSize:23, marginLeft:13 }}/>
        </View>

      </View>



      <View style={{backgroundColor:"pink", width:"100%", alignItems:"center"}}>
        <View>
          
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
    width:'100%',
  },
});
