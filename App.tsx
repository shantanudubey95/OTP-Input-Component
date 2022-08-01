import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import OTPInputs from "./src/OTPInputs";
import tw from 'twrnc';

export default class App extends Component {
  render() {
    return (
      <View style={tw`flex-1 justify-center`}>
        <OTPInputs
          // handleChange={(code) => console.log(code)}
          numberOfInputs={4}
        />
      </View>
    );
  }
}


