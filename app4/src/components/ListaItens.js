import React, { Component } from 'react';
import {
  ScrollView
 } from 'react-native';

import axios from 'axios';
import Item from './Item';

export default class ListaItens extends Component {

  constructor(props) {
    super(props);
    this.state = { listaItens: [] };
  }

  componentWillMount() {
    //requisicao http
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => { this.setState({ listaItens: response.data }); })
      .catch(() => console.log('Ero ao recuperar os dados'));
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#DDD' }}>
        {this.state.listaItens.map(item => (<Item key={item.titulo} value={item} />))}
      </ScrollView>
    );
  }

}
