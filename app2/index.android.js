//Import
import React from 'react';
import { AppRegistry, Image, View, Text, TouchableOpacity, Alert } from 'react-native';

//Formatações
const Estilos = {
  principal: {
    // backgroundColor: '#538530',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
  const numeroAleatorio = Math.floor(Math.random() * 5);
  const frases = [
    'O empenho em analisar a complexidade dos estudos efetuados não pode mais se dissociar dos procedimentos normalmente adotados.',
    'Por conseguinte, o acompanhamento das preferências de consumo obstaculiza a apreciação da importância do remanejamento dos quadros funcionais.',
    'No entanto, não podemos esquecer que a necessidade de renovação processual faz parte de um processo de gerenciamento dos procedimentos normalmente adotados.',
    'A nível organizacional, a hegemonia do ambiente político faz parte de um processo de gerenciamento das diversas correntes de pensamento.',
    'Evidentemente, o entendimento das metas propostas apresenta tendências no sentido de aprovar a manutenção das formas de ação.',
  ];

  Alert.alert(frases[numeroAleatorio]);
};

// Componente
const App = () => (
  <View style={Estilos.principal}>
    <Image source={require('./imgs/logo.png')} />
    <TouchableOpacity 
      onPress={gerarNovaFrase}
      style={Estilos.botao}
    >
      <Text style={Estilos.textoBotao}>Nova Frase</Text>
    </TouchableOpacity>
  </View>
);

// Renderizar para dispositivo
AppRegistry.registerComponent('app2', () => App);
