import { View, Text, LayoutChangeEvent, PixelRatio, TextInput} from 'react-native'
import React, { useCallback, useEffect, useState, useRef } from 'react';
import tw from 'twrnc';

interface Props {
    numberOfInputs: 4|6;
  }

  export default function OTPInputs({ numberOfInputs }: Props) {

    const firstBox = useRef(null);
    const secondBox = useRef(null);
    const thirdBox = useRef(null);
    const fourthBox = useRef(null);

    return (
        <View style={tw`w-full flex-row justify-center items-center ` }>
            <TextInput 
                style={tw`mx-2.5 h-12 w-12 border-2 rounded-md border-[#04825C]`}
                keyboardType="numeric"
                textAlign='center'
                selectionColor={"#04825C"}
                maxLength={1}
                ref={firstBox}
                autoFocus={true}
                returnKeyType="next"
                onSubmitEditing={() => { secondBox.current.focus() }}
                blurOnSubmit={false}
                // onChangeText={onChangeText}
                // value={text}
                />
            <TextInput 
                style={tw`mx-2.5 h-12 w-12 border-2 rounded-md border-[#04825C]`}
                keyboardType="numeric"
                textAlign='center'
                selectionColor={"#04825C"}
                maxLength={1}
                ref={secondBox}
                returnKeyType="next"
                onSubmitEditing={() => thirdBox.current.focus()}
                // onChangeText={onChangeText}
                // value={text}
                />
            <TextInput 
                style={tw`mx-2.5 h-12 w-12 border-2 rounded-md  border-[#04825C]`}
                keyboardType="numeric"
                textAlign='center'
                selectionColor={"#04825C"}
                maxLength={1}
                ref={thirdBox}  
                returnKeyType="next"
                onSubmitEditing={() => fourthBox.current.focus()}
                
                // onChangeText={onChangeText}
                // value={text}
                />
            <TextInput 
                style={tw`mx-2.5 h-12 w-12 border-2 rounded-md border-[#04825C]`}
                keyboardType="numeric"
                textAlign='center'
                selectionColor={"#04825C"}
                maxLength={1}
                ref={fourthBox}
                returnKeyType="done"
                // onChangeText={onChangeText}
                // value={text}
                />
        </View>
    )
  }