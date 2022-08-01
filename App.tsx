import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import OTPInputs from "./src/OTPInputs";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <OTPInputs
          // handleChange={(code) => console.log(code)}
          numberOfInputs={4}
        />
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})
