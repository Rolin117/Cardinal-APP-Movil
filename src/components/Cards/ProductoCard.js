// ProductoCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductoCard({ ip, nombre_producto, imagen_producto, precio_producto, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(id_producto)}>
      <Image 
        source={{ uri: `${ip}/Cardinal_SST-Final/api/images/productos/${imagen_producto}` }} 
        style={styles.image} 
        resizeMode="cover" 
      />
      <Text style={styles.name}>{nombre_producto}</Text>
      <Text style={styles.price}>${precio_producto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 150,
    width: 150,
    borderRadius: 10,
    resizeMode: 'stretch',
    marginLeft: 85
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
  },
  price: {
    fontSize: 14,
    color: '#f08080',
    marginTop: 5,
    fontFamily: 'Poppins-Regular',
  },
});
