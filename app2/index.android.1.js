//Import
import React from 'react';
import { AppRegistry, TouchableOpacity, Text, View } from 'react-native';

//Formatações
const Estilos = {
  principal: {
    //paddingTop: 40
  },
  botao: {
    backgroundColor: '#48BBEC',
    padding: 10,
    // borderColor: '#1d8eb8',
    // borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }

};

// const botaoPressionado = () => alert('Botão Pressionado!');

// Componente
const App = () => (
  <View style={Estilos.principal}>
    <TouchableOpacity style={Estilos.botao}>
      <Text style={Estilos.textoBotao}>Clique Aqui</Text>
    </TouchableOpacity>
    
  </View>
);

// Renderizar para dispositivo
AppRegistry.registerComponent('app2', () => App);
