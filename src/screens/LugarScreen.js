import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from "react-native";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LugarScreen = () => {
  const mochejaIcon = require("./../../assets/mochejalogopng.png");
  const mochejaLugar = require("./../../assets/mochejaLugar.jpg");

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.headerIconLeft}>
          <FontAwesome6 name="bars" size={23} />
        </Pressable>
        <Image source={mochejaIcon} style={styles.logo} />
        <View style={styles.headerIconsRight}>
          <FontAwesome6 name="bell" style={styles.headerIcon} />
          <FontAwesome6 name="user" style={styles.headerIcon} />
        </View>
      </View>

      {/* Imagen */}
      <Image source={mochejaLugar} style={styles.mainImage} />

      {/* Contenido */}
      <View style={styles.content}>
        <Text style={styles.title}>Soñando con Francia 2024-2025</Text>

        {/* Calificacion */}
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>Calificación:</Text>
          <Icon name="star" style={styles.starIconFilled} />
          <Icon name="star" style={styles.starIconFilled} />
          <Icon name="star" style={styles.starIconFilled} />
          <Icon name="star" style={styles.starIconFilled} />
          <Icon name="star-half-o" style={styles.starIconFilled} />
        </View>

        {/* Detalles */}
        <View style={styles.details}>
          <Text style={styles.detailText}>Duración:</Text>
          <Text style={styles.detailText}>9 Días - 8 Noches</Text>
          <Text style={styles.detailText}>Inicia/Finaliza:</Text>
          <Text style={styles.detailText}>París/París</Text>
        </View>

        {/* Incluye*/}
        <View style={styles.includedItems}>
          <Text style={styles.includedText}>Incluye:</Text>
          <View style={styles.iconContainer}>
            <View style={styles.iconBox}>
              <Fontisto name="bus" style={styles.icon} />
              <Text style={styles.iconLabel}>Bus</Text>
            </View>
            <View style={styles.iconBox}>
              <FontAwesome6 name="bed" style={styles.icon} />
              <Text style={styles.iconLabel}>Alojamiento</Text>
            </View>
            <View style={styles.iconBox}>
              <SimpleLineIcons name="user-follow" style={styles.icon} />
              <Text style={styles.iconLabel}>Guía</Text>
            </View>
            <View style={styles.iconBox}>
              <Icon name="coffee" style={styles.icon} />
              <Text style={styles.iconLabel}>Desayuno</Text>
            </View>
            <View style={styles.iconBox}>
              <FontAwesome6 name="umbrella-beach" style={styles.icon} />
              <Text style={styles.iconLabel}>Seguro de Viaje</Text>
            </View>
            <View style={styles.iconBox}>
              <Icon name="wifi" style={styles.icon} />
              <Text style={styles.iconLabel}>Datos Móviles</Text>
            </View>
            <View style={styles.iconBox}>
              <Icon name="camera" style={styles.icon} />
              <Text style={styles.iconLabel}>Excursiones</Text>
            </View>
          </View>
        </View>

        {/* Reservar */}
        <Pressable style={styles.reserveButton}>
          <Text style={styles.reserveButtonText}>Reservar Ya</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default LugarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 25,
    backgroundColor: "#fff",
  },
  logo: {
    width: 80,
    height: 90,
    resizeMode: "contain",
  },
  headerIconLeft: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  headerIconsRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  headerIcon: {
    fontSize: 23,
    marginLeft: 20,
  },
  mainImage: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    backgroundColor: '#83c655',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  ratingText: {
    fontSize: 16,
    marginRight: 10,
  },
  starIconFilled: {
    fontSize: 20,
    color: '#ffd700',
    marginHorizontal: 2,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  includedItems: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
  },
  includedText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  iconBox: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    fontSize: 24,
    color: '#83c655',
    marginBottom: 5,
  },
  iconLabel: {
    fontSize: 14,
    color: '#666',
  },
  reserveButton: {
    backgroundColor: '#83c655',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  reserveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
