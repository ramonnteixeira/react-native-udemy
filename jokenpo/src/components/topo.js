import React, { Component } from 'react';
import {
  Image,
  View
} from 'react-native';

const logotipo = require('../../imgs/jokenpo.png');

export default class Topo extends Component {
  render() {
    return (
      <View >
        <Image 
          resizeMode="stretch" 
          style={{ width: '100%' }}
          source={logotipo} 
        />
      </View>
    );
  }
}
