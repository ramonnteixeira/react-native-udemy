import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet
} from 'react-native';

const pedra = require('../../imgs/pedra.png');
const papel = require('../../imgs/papel.png');
const tesoura = require('../../imgs/tesoura.png');

const IMAGES = {
    pedra, papel, tesoura
};

const styles = StyleSheet.create({
    icone: {
      alignItems: 'center'
    },
    txtJogador: {
      fontSize: 18
    }
});

export default class Icone extends Component {
    render() {
      if (!this.props.escolha) {
        return false;
      }
    
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={IMAGES[this.props.escolha]} />
        </View>
      );
    }
}

