import React, { Component } from 'react';
import { StatusBar, View, Image, Text, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/detalhe_empresa.png');

const headerColor = '#EC7148';

export default class CenaEmpresa extends Component {
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
                <Text style={styles.txtTitulo}>A Empresa</Text>
            </View>

            <View style={styles.detalhe}>
                <Text style={styles.txtDetalhe}>
                    Lorem ipsum dolorem sit amet, dolorem sit amet ipsum dolorem sit
                </Text>
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
