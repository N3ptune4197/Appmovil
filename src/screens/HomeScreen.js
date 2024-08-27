import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Pressable } from "react-native";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from "react-native-gesture-handler";

const LoginScreen = () => {
  const mochejaIcon = require("./../../assets/mochejalogopng.png");
  const machuPicchu = require("./../../assets/machuPicchu.jpg");
  const londres = require("./../../assets/Londres.png");
  const paris = require("./../../assets/Paris.jpg");
  const caracas = require("./../../assets/Caracas.jpg");
  const bogota = require("./../../assets/Bogota.jpg");
  const riodejaneiro = require("./../../assets/RiodeJaneiro.jpg");
  const coliseoRomano = require("./../../assets/ColiseoRomano.jpg");
  const chichenItza = require("./../../assets/ChichenItza.jpg");


return (

    <View style={styles.container}>
      <StatusBar style="auto" />


      <View style={{width:'95%', flexDirection:'row', justifyContent:"center", alignItems:"center", marginTop:13, marginBottom:10}}>
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





      <ScrollView>


      <View style={{width:"90%", alignItems:"center", backgroundColor:"white", marginBottom:15}}>

        <Text style={{fontSize:30, fontWeight:"600", marginBottom:20 }}>Lugares Turísticos</Text>

        <View style={{width:"100%", flexDirection:"row", alignItems:"center", justifyContent:"center", alignContent:"space-between", backgroundColor:"white" }} >

          <TextInput style={{width:'80%', height:33, marginBottom:10, backgroundColor:'#E4E4E4', borderRadius:5, textAlignVertical:'center', fontSize:15, textAlign:"center" }} placeholder="Buscar" />
          <Ionicons name="search" style={{borderColor:"black", justifyContent:"flex-end", paddingBottom:13, fontSize:23, marginLeft:13 }}/>
        </View>

      </View>



      <View style={{width:"100%", alignItems:"center", flexDirection:"column", gap:15}}>

        
        <View style={{flexDirection:"row", gap:20}}>
          <View>
            <Text style={{textAlign:"center", fontSize:20, marginBottom:7}}>Perú</Text>
            <Image  source={machuPicchu}  style= {{width:160, height:140, borderRadius:15}} />
          </View>
          
          <View>
            <Text style={{textAlign:"center", fontSize:20, marginBottom:7}}>Londres</Text>
            <Image  source={londres}  style= {{width:160, height:140, borderRadius:15}} />
          </View>
        </View>




        <View style={{flexDirection:"row", gap:20}}>
          <View>
            <Text style={{textAlign:"center", fontSize:20, marginBottom:7}}>París</Text>
            <Image  source={paris}  style= {{width:160, height:140, borderRadius:15}} />
          </View>
          
          <View>
            <Text style={{textAlign:"center", fontSize:20, marginBottom:7}}>Caracas</Text>
            <Image  source={caracas}  style= {{width:160, height:140, borderRadius:15}} />
          </View>
        </View>




        <View style={{flexDirection:"row", gap:20}}>
          <View>
            <Text style={{textAlign:"center", fontSize:20, marginBottom:7}}>Bogotá</Text>
            <Image  source={bogota}  style= {{width:160, height:140, borderRadius:15}} />
          </View>
          
          <View>
            <Text style={{textAlign:"center", fontSize:20, marginBottom:7}}>Rio de Janeiro</Text>
            <Image  source={riodejaneiro}  style= {{width:160, height:140, borderRadius:15}} />
          </View>
        </View>





        <View style={{flexDirection:"row", gap:20}}>
          <View>
            <Text style={{textAlign:"center", fontSize:20, marginBottom:7}}>Coliseo Romano</Text>
            <Image  source={coliseoRomano}  style= {{width:160, height:140, borderRadius:15}} />
          </View>
          
          <View>
            <Text style={{textAlign:"center", fontSize:20, marginBottom:7}}>Chichen Itza</Text>
            <Image  source={chichenItza}  style= {{width:160, height:140, borderRadius:15}} />
          </View>
        </View>

      </View>


      </ScrollView>





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
