import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Topo from './topo';
import Icone from './icone';

export default class Jokenpo extends Component {
  
  constructor(props) {
    super(props);

    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }

  jokenpo(escolhaUsuario) {
    const opcoesValidas = ['pedra', 'papel', 'tesoura'];
    const sorteio = Math.floor(Math.random() * 3);
    const escolhaComputador = opcoesValidas[sorteio];

    let resultado;
    if (escolhaComputador === escolhaUsuario) {
      resultado = 'empate';
    } else if (escolhaComputador === 'pedra') {
      resultado = escolhaUsuario === 'papel' ? 'Você Venceu' : 'Computador Venceu';
    } else if (escolhaComputador === 'papel') {
      resultado = escolhaUsuario === 'tesoura' ? 'Você Venceu' : 'Computador Venceu';
    } else if (escolhaComputador === 'tesoura') {
      resultado = escolhaUsuario === 'pedra' ? 'Você Venceu' : 'Computador Venceu';
    }

    this.setState({ escolhaUsuario, escolhaComputador, resultado });
  }

  render() {
    return (
      <View>
        <Topo />

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha} >
            <Button title="pedra" onPress={() => this.jokenpo('pedra')} />
          </View>
          
          <View style={styles.btnEscolha} >
            <Button title="papel" onPress={() => this.jokenpo('papel')} />
          </View>

          <View style={styles.btnEscolha} >
            <Button title="tesoura" onPress={() => this.jokenpo('tesoura')} />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          
          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          <Icone escolha={this.state.escolhaUsuario} jogador='Você' />
        </View>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});
