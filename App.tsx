import React, { Component } from "react";
import { View } from "react-native";
import tw from "twrnc";

import OTPInputs from "./src/OTPInputs";

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
