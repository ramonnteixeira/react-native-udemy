import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet
 } from 'react-native';

export default class ListaItens extends Component {

  render() {
    return (
      <TouchableOpacity style={Estilo.view}>
        <Image style={Estilo.imagem} source={{ uri: this.props.value.foto }} />
        <View style={Estilo.conteudo}>
          <Text style={Estilo.titulo}>{this.props.value.titulo}</Text>
          <Text>R$ {this.props.value.valor}</Text>
          <Text style={Estilo.local}>Local: {this.props.value.local_anuncio}</Text>
          <Text>Publicado em: {this.props.value.data_publicacao}</Text>
        </View>
      </TouchableOpacity>
    );
  }

}

const Estilo = StyleSheet.create({
  view: {
    borderWidth: 0.5,
    borderColor: '#c9c9c9',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    borderRadius: 8
  },
  conteudo: {
    flex: 1,
    marginLeft: 10
  },
  imagem: {
    height: 100, 
    width: 100
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    fontColor: 'blue'
  },
  local: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});
