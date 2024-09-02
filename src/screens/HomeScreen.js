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
import axios from "axios";

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
  const [weatherData, setWeatherData] = useState(null);
  const [citySearch, setCitySearch] = useState(""); //busqueda por CIUDAD

  const destinations = [
    {
      name: "Perú",
      image: machuPicchu,
      lat: -13.1631,
      lon: -72.545,
      message:
        "Explora la majestuosa ciudadela inca, una maravilla del mundo en lo alto de los Andes.",
    },
    {
      name: "Londres",
      image: londres,
      lat: 51.5074,
      lon: -0.1278,
      message:
        "Sumérgete en la histórica y cosmopolita capital británica, donde lo antiguo se encuentra con lo moderno.",
    },
    {
      name: "París",
      image: paris,
      lat: 48.8566,
      lon: 2.3522,
      message:
        "Vive el romance y la elegancia en el corazón de Europa, desde París hasta la Riviera Francesa.",
    },
    {
      name: "Caracas",
      image: caracas,
      lat: 10.4806,
      lon: -66.9036,
      message:
        "Descubre la vibrante capital de Venezuela, llena de historia y cultura en cada rincón.",
    },
    {
      name: "Bogotá",
      image: bogota,
      lat: 4.711,
      lon: -74.0721,
      message:
        "Conoce la colorida y cultural capital de Colombia, un destino lleno de arte y sabor.",
    },
    {
      name: "Rio de Janeiro",
      image: riodejaneiro,
      lat: -22.9068,
      lon: -43.1729,
      message:
        "Experimenta la alegría y belleza natural de la icónica ciudad brasileña, hogar del Carnaval.",
    },
    {
      name: "Coliseo Romano",
      image: coliseoRomano,
      lat: 41.8902,
      lon: 12.4922,
      message:
        "Viaja al pasado en el imponente Coliseo, un símbolo de la grandeza del Imperio Romano.",
    },
    {
      name: "Chichen Itza",
      image: chichenItza,
      lat: 20.6843,
      lon: -88.5678,
      message:
        "Admira la impresionante pirámide de Kukulkán, testimonio de la avanzada civilización maya.",
    },
  ];

  const fetchWeatherData = async (placeId) => {
    try {
      const response = await axios.get(
        `https://www.meteosource.com/api/v1/free/point`,
        {
          params: {
            place_id: placeId,
            sections: "all",
            timezone: "UTC",
            language: "en",
            units: "metric",
            key: "5mxzfs5wahaesjx4g27cc6tgz48euhb4a06bdw0k",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      return null;
    }
  };

  const openModal = async (destination) => {
    setSelectedDestination(destination);
    setModalVisible(true);

    const placeId = getPlaceId(destination.name);
    if (placeId) {
      const data = await fetchWeatherData(placeId);
      if (data) {
        setWeatherData(data.current);
      }
    }
  };

  const handleCitySearch = async () => {
    const placeId = await getPlaceId(citySearch);
    if (placeId) {
      const data = await fetchWeatherData(placeId);
      if (data) {
        setWeatherData(data.current);
        setSelectedDestination(null);
        setModalVisible(true);
      }
    }
  };

  const getPlaceId = async (cityName) => {
    return cityName;
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedDestination(null);
    setWeatherData(null);
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
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar ciudad"
              onChangeText={setCitySearch}
              value={citySearch}
            />
            <Ionicons
              name="search"
              style={styles.searchIcon}
              onPress={handleCitySearch}
            />
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
            <Text style={styles.modalTitle}>
              {selectedDestination ? selectedDestination.name : citySearch}
            </Text>
            {selectedDestination && (
              <Image
                source={selectedDestination.image}
                style={styles.modalImage}
              />
            )}
            <Text style={styles.modalMessage}>
              {selectedDestination
                ? selectedDestination.message
                : `Clima actual en ${citySearch}`}
            </Text>
            {weatherData ? (
              <View style={styles.weatherContainer}>
                <Text>Temperatura: {weatherData.temperature}°C</Text>
                <Text>Humedad: {weatherData.clouds}%</Text>
                <Text>Viento: {weatherData.wind.speed} km/h</Text>
              </View>
            ) : (
              <Text>Cargando clima...</Text>
            )}
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
  },
  header: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  headerLeft: {
    flex: 1,
    justifyContent: "center",
  },
  headerCenter: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  headerRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: "contain",
  },
  icon: {
    fontSize: 20,
  },
  searchSection: {
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  searchBar: {
    flexDirection: "row",
    marginTop: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  searchIcon: {
    fontSize: 20,
    color: "#007bff",
  },
  destinationsContainer: {
    flex: 1,
    padding: 16,
  },
  destinationWrapper: {
    marginBottom: 16,
  },
  destinationText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  destinationImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginTop: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginVertical: 16,
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: 16,
  },
  weatherContainer: {
    marginBottom: 16,
  },
  modalButton: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
