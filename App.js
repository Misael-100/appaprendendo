import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Capa from './assets/capa3.jpg';
import Foto from './assets/Foto1.jpg';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Image style={ estilos.fotoTopo } source={Capa} />

      <View style={ estilos.boxDescricao }>
        <Image style={ estilos.fotoPerfil } source={Foto} />
        <Text style={ estilos.titulo }>Misael Soares</Text>
        <Text style={ estilos.cargo }>Desenvolvedor mobile, procurando oportunidades para estágio</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  fotoTopo: {
    flex: 1,
  },

  boxDescricao: {
    flex: 1,
    alignItems: 'center',
  },

  fotoPerfil: {
    marginTop:20,
    marginBottom:20,
    width: 100,
    height: 100,
    borderRadius:50
  },
  titulo: {
    marginBottom:10,
    fontSize: 22,
    color: '#fff'
  },
  cargo: {
    textAlign: 'center',
    marginHorizontal: 15,
    fontSize: 16,
    color: '#fff'
  }
});