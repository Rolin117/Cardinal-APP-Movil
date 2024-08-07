// Importaciones 
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Contenido de la página principal
export default function home({ navigation }) {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Image source={require('../img/Logo.png')} style={styles.logo} />
        <TextInput style={styles.searchInput} placeholder="Buscar productos..." />
        <TouchableOpacity style={styles.cartIcon}>
          <Icon name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.productName}>¡Contáctanos!</Text>
        <Text style={styles.contacDescription}>
          ¿Quieres contratar uno de nuestros servicios o tienes una consulta?
          Ponte en contacto con nosotros.
        </Text>
        <Text style={styles.productName}>Hola!, escribenos tu problema</Text>
        <TextInput style={styles.input} placeholder="Mensaje" multiline={true} numberOfLines={4} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Se comienza el código css
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingTop: 35,
  },
  logo: {
    width: 50,
    height: 50,
  },
  searchInput: {
    flex: 1,
    marginLeft: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  cartIcon: {
    marginLeft: 16,
  },
  container: {
    padding: 16,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    marginBottom: 16,
  },
  productImage: {
    height: 150,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
  },
  contacDescription: {
    marginTop: 15,
    textAlign: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    fontSize: 20,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginTop: 40,
  },
  productPrice: {
    fontSize: 16,
    color: '#888',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#00B207',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 3,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});
