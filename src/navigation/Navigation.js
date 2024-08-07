//Importaciones 

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/login';
import Registro from '../Screens/registro';
import Recuperacion from '../Screens/recuperacion-contra';
import CambioContra from '../Screens/cambio-contra';
import DatosU from '../Screens/datos-usuario';
import Home from '../Screens/home';
import DetalleProducto from '../Screens/detalle_producto';
import LoadingScreen from '../Screens/pantalla_carga';
import Servicios from '../Screens/servicios';
import Carrito from '../Screens/carrito';
import Contacto from '../Screens/contacto';


const Stack = createStackNavigator();

//Stack Navigator para la navegación de las pantallas 

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="pantalla_carga" component={LoadingScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="registro" component={Registro} />
      <Stack.Screen name="recuperacion-contra" component={Recuperacion} />
      <Stack.Screen name="cambio-contra" component={CambioContra} />
      <Stack.Screen name="datos-usuario" component={DatosU} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="detalle_producto" component={DetalleProducto} />
      <Stack.Screen name="servicios" component={Servicios} />
      <Stack.Screen name="carrito" component={Carrito} />
      <Stack.Screen name="contacto" component={Contacto} />
    </Stack.Navigator>
  );
}

//Función que retorna el stack para las demás pantallas

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}