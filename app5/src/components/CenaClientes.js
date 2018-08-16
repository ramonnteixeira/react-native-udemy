import React, { Component } from 'react';
import { StatusBar, View, Image, Text, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheClientes = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

const headerColor = '#B9C941';

export default class CenaPrincipal extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar
                backgroundColor={headerColor}
                //hidden
            />

            <BarraNavegacao voltar color={headerColor} navigator={this.props.navigator} />

            <View style={styles.cabecalho}>
                <Image source={detalheClientes} />
                <Text style={styles.txtTitulo}>Nossos Clientes</Text>
            </View>

            <View style={styles.detalheCliente}>
                <Image source={cliente1} />
                <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
            </View>

            <View style={styles.detalheCliente}>
                <Image source={cliente2} />
                <Text style={styles.txtDetalheCliente}>Lorem ipsum dolorem</Text>
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
    detalheCliente: {
        marginTop: 10,
        padding: 20
    },
    txtDetalheCliente: {
        fontSize: 18,
        marginLeft: 20
    }
});
