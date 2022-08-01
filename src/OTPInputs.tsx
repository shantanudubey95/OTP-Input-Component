import { View, Text, LayoutChangeEvent, PixelRatio, TextInput} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react';
import tw from 'twrnc';

interface Props {
    numberOfInputs: 4|6;
  }

  export default function OTPInputs({ numberOfInputs }: Props) {
    return (
        <View style={tw`w-full flex-row justify-center items-center ` }>
            <TextInput 
                style={tw`mx-2.5 h-12 w-12 border-2 rounded-md border-[#04825C]`}
                keyboardType="numeric"
                textAlign='center'
                selectionColor={"#04825C"}
                // onChangeText={onChangeText}
                // value={text}
                />
            <TextInput 
                style={tw`mx-2.5 h-12 w-12 border-2 rounded-md border-[#04825C]`}
                keyboardType="numeric"
                textAlign='center'
                selectionColor={"#04825C"}
                // onChangeText={onChangeText}
                // value={text}
                />
            <TextInput 
                style={tw`mx-2.5 h-12 w-12 border-2 rounded-md  border-[#04825C]`}
                keyboardType="numeric"
                textAlign='center'
                selectionColor={"#04825C"}
                // onChangeText={onChangeText}
                // value={text}
                />
            <TextInput 
                style={tw`mx-2.5 h-12 w-12 border-2 rounded-md border-[#04825C]`}
                keyboardType="numeric"
                textAlign='center'
                selectionColor={"#04825C"}
                // onChangeText={onChangeText}
                // value={text}
                />
        </View>
    )
  }