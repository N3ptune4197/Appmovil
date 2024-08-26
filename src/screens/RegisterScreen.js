import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, Pressable, } from "react-native";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


const RegisterScreen = () => {
const mochejaIcon = require("./../../assets/mochejalogopng.png");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style= {{flex:0, marginBottom: 20}}>
        <Image
          source={mochejaIcon}
          style={{ width: 200, height: 150, resizeMode: "contain" }}
        />
      </View>
      

      <Text
        style= {{
          fontSize: 34,
          fontWeight:"800",
          marginBottom: 35,
        }}
      >
        Registrarse
      </Text>


      <View style={{flex:1, width:'100%'}}>


        <View style={{flexDirection: "row", marginBottom:10, marginLeft:25}}>
          <FontAwesome6 name="user" style={{fontSize:20, fontWeight:900 }} />
          <Text style={{justifyContent:"center", alignItems:"center", fontSize:20, fontWeight:500, marginLeft:5}}>Nombres y Apellidos</Text>
        </View>
        <TextInput style={{width:'90%', marginBottom:10, height:30, backgroundColor:'#E0E0E0', borderRadius:5, textAlignVertical:'center', paddingLeft:7, fontSize:15}} placeholder="Ana Liz Jara Zuñe" />



        <View style={{flexDirection: "row", marginBottom:5, marginLeft:25}}>
          <Fontisto name="email" style={{fontSize:20, fontWeight:900 }} />
          <Text style={{justifyContent:"center", alignItems:"center", fontSize:20, fontWeight:500, marginLeft:5}}>Email</Text>
        </View>
        <TextInput style={{width:'90%', height:30, marginBottom:10,  backgroundColor:'#E0E0E0', borderRadius:5, textAlignVertical:'center', paddingLeft:7, fontSize:15}} placeholder="alguien@gmail.com" inputMode="email" />

        
        <View style={{flexDirection: "row", marginBottom:5, marginLeft:25}}>
          <SimpleLineIcons name="lock" style={{fontSize:20, fontWeight:900 }} />
          <Text style={{justifyContent:"center", alignItems:"center", fontSize:20, fontWeight:500, marginLeft:5}}>Contraseña</Text>
        </View>
        <TextInput style={{width:'90%', height:30, marginBottom:10, backgroundColor:'#E0E0E0', borderRadius:5, textAlignVertical:'center', paddingLeft:7, fontSize:15}} placeholder="************" inputMode="email" />

        
        <View style={{flexDirection: "row", marginBottom:5, marginLeft:25}}>
          <SimpleLineIcons name="lock" style={{fontSize:20, fontWeight:900 }} />
          <Text style={{justifyContent:"center", alignItems:"center", fontSize:20, fontWeight:500, marginLeft:5}}>Repetir contraseña</Text>
        </View>
        <TextInput style={{width:'90%', height:30, backgroundColor:'#E0E0E0', borderRadius:5, textAlignVertical:'center', paddingLeft:7, fontSize:15}} placeholder="************" inputMode="email" />


        <View style={{justifyContent:"center", alignItems:"center", marginTop:45}}>
          <Pressable style={{backgroundColor:'skyblue', width:'auto', paddingHorizontal:50, paddingVertical:10 , alignContent:"center", justifyContent:"center"}}>
            <Text style={{fontSize:18}}>Hola</Text>
          </Pressable>
        </View>
        


      </View>
      


    </View>
  )
}

export default RegisterScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: 'column',
      paddingTop: 50,
      paddingHorizontal: 15, 
    },
  });
  