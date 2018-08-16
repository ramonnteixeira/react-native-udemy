import React, { Component } from 'react';
import { StatusBar, View, Image, Text, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/detalhe_servico.png');

const headerColor = '#19D1C8';

export default class CenaServicos extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar
                backgroundColor={headerColor}
                //hidden
            />

            <BarraNavegacao voltar color={headerColor} navigator={this.props.navigator} />

            <View style={styles.cabecalho}>
                <Image source={logo} />
                <Text style={styles.txtTitulo}>Nossos Serviços</Text>
            </View>

            <View style={styles.detalhe}>
                <Text style={styles.txtDetalhe}>- Consultoria</Text>
                <Text style={styles.txtDetalhe}>- Processos</Text>
                <Text style={styles.txtDetalhe}>- Acompanhamento de Projetos</Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        flex: 1,
        fontSize: 32,
        color: headerColor,
        marginLeft: 15,
        marginTop: 25
    },
    detalhe: {
        marginTop: 10,
        padding: 20
    },
    txtDetalhe: {
        fontSize: 18
    }
});
