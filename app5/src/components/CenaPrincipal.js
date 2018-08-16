import React, { Component } from 'react';
import { StatusBar, View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import BarraNavegacao from './BarraNavegacao';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar
                backgroundColor='#CCC'
                //hidden
            />

            <BarraNavegacao />

            <View style={styles.logo}>
                <Image source={logo} />
            </View>

            <View style={styles.menu}>
                <View style={styles.menuGroup}>
                    <TouchableHighlight 
                        underlayColor={'#B9C941'}
                        activeOpacity={0.3}
                        style={styles.imageMenu} 
                        onPress={() => this.props.navigator.push({ id: 'clientes' })}
                    >
                        <Image source={menuCliente} />
                    </TouchableHighlight>
                    <TouchableHighlight 
                        underlayColor={'#61BD8C'}
                        activeOpacity={0.3}
                        style={styles.imageMenu}
                        onPress={() => this.props.navigator.push({ id: 'contatos' })}
                    >
                        <Image source={menuContato} />
                    </TouchableHighlight>
                </View>
                <View style={styles.menuGroup}>
                    <TouchableHighlight 
                        underlayColor={'#EC7148'}
                        activeOpacity={0.3}
                        style={styles.imageMenu}
                        onPress={() => this.props.navigator.push({ id: 'empresa' })}
                    >
                        <Image source={menuEmpresa} />
                    </TouchableHighlight>
                    <TouchableHighlight 
                        underlayColor={'#19D1C8'}
                        activeOpacity={0.3}
                        style={styles.imageMenu}
                        onPress={() => this.props.navigator.push({ id: 'servicos' })}
                    >
                        <Image source={menuServico} />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 30,
        alignItems: 'center'
    },
    menu: {
        alignItems: 'center',
    },
    menuGroup: {
        flexDirection: 'row',
    },
    imageMenu: {
        margin: 15
    }
});
