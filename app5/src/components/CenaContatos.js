import React, { Component } from 'react';
import { StatusBar, View, Image, Text, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const detalheContatos = require('../imgs/detalhe_contato.png');

const headerColor = '#61BD8C';

export default class CenaContatos extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar
                backgroundColor={headerColor}
                //hidden
            />

            <BarraNavegacao voltar color={headerColor} navigator={this.props.navigator} />

            <View style={styles.cabecalho}>
                <Image source={detalheContatos} />
                <Text style={styles.txtTitulo}>Contatos</Text>
            </View>

            <View style={styles.detalheContatos}>
                <Text style={styles.txtContatos}>Tel: (11) 1234-1234</Text>
                <Text style={styles.txtContatos}>Cel: (11) 91234-1234</Text>
                <Text style={styles.txtContatos}>Email: contato@atmconsultoria.com</Text>
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
    detalheContatos: {
        marginTop: 10,
        padding: 20
    },
    txtContatos: {
        fontSize: 18
    }
});
