import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
  Modal,
} from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Ionicons from "react-native-vector-icons/Ionicons";
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

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinations = [
    {
      name: "Perú",
      image: machuPicchu,
      message:
        "Explora la majestuosa ciudadela inca, una maravilla del mundo en lo alto de los Andes.",
    },
    {
      name: "Londres",
      image: londres,
      message:
        "Sumérgete en la histórica y cosmopolita capital británica, donde lo antiguo se encuentra con lo moderno.",
    },
    {
      name: "París",
      image: paris,
      message:
        "Vive el romance y la elegancia en el corazón de Europa, desde París hasta la Riviera Francesa.",
    },
    {
      name: "Caracas",
      image: caracas,
      message:
        "Descubre la vibrante capital de Venezuela, llena de historia y cultura en cada rincón.",
    },
    {
      name: "Bogotá",
      image: bogota,
      message:
        "Conoce la colorida y cultural capital de Colombia, un destino lleno de arte y sabor.",
    },
    {
      name: "Rio de Janeiro",
      image: riodejaneiro,
      message:
        "Experimenta la alegría y belleza natural de la icónica ciudad brasileña, hogar del Carnaval.",
    },
    {
      name: "Coliseo Romano",
      image: coliseoRomano,
      message:
        "Viaja al pasado en el imponente Coliseo, un símbolo de la grandeza del Imperio Romano.",
    },
    {
      name: "Chichen Itza",
      image: chichenItza,
      message:
        "Admira la impresionante pirámide de Kukulkán, testimonio de la avanzada civilización maya.",
    },
  ];

  const openModal = (destination) => {
    setSelectedDestination(destination);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedDestination(null);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Pressable>
            <FontAwesome6 name="bars" size={23} />
          </Pressable>
        </View>
        <View style={styles.headerCenter}>
          <Image source={mochejaIcon} style={styles.logo} />
        </View>
        <View style={styles.headerRight}>
          <FontAwesome6 name="bell" style={styles.icon} />
          <FontAwesome6 name="user" style={styles.icon} />
        </View>
      </View>

      <ScrollView>
        <View style={styles.searchSection}>
          <Text style={styles.title}>Lugares Turísticos</Text>
          <View style={styles.searchBar}>
            <TextInput style={styles.searchInput} placeholder="Buscar" />
            <Ionicons name="search" style={styles.searchIcon} />
          </View>
        </View>

        <View style={styles.destinationsContainer}>
          {destinations.map((destination, index) => (
            <Pressable
              key={index}
              onPress={() => openModal(destination)}
              style={styles.destinationWrapper}
            >
              <Text style={styles.destinationText}>{destination.name}</Text>
              <Image
                source={destination.image}
                style={styles.destinationImage}
              />
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedDestination?.name}</Text>
            <Image
              source={selectedDestination?.image}
              style={styles.modalImage}
            />
            <Text style={styles.modalMessage}>
              {selectedDestination?.message}
            </Text>
            <Pressable onPress={closeModal} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 13,
    marginBottom: 10,
  },
  headerLeft: {
    justifyContent: "flex-start",
    width: "36%",
  },
  headerCenter: {
    justifyContent: "center",
  },
  headerRight: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "36%",
  },
  logo: {
    width: 80,
    height: 90,
    resizeMode: "contain",
  },
  icon: {
    fontSize: 23,
    paddingRight: 20,
  },
  searchSection: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "white",
    marginBottom: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 20,
  },
  searchBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    width: "80%",
    height: 33,
    backgroundColor: "#E4E4E4",
    borderRadius: 5,
    textAlignVertical: "center",
    fontSize: 15,
    textAlign: "center",
  },
  searchIcon: {
    fontSize: 23,
    marginLeft: 13,
  },
  destinationsContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: 15,
  },
  destinationWrapper: {
    width: "45%",
    alignItems: "center",
    marginBottom: 15,
  },
  destinationText: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 7,
  },
  destinationImage: {
    width: 160,
    height: 140,
    borderRadius: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalImage: {
    width: 250,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
});
