import { View, Text, LayoutChangeEvent, PixelRatio, TextInput} from 'react-native'
import React, { useCallback, useEffect, useState, useRef } from 'react';
import tw from 'twrnc';

interface Props {
    numberOfInputs: 4|6;
  }

  export default function OTPInputs({ numberOfInputs }: Props) {

    const [otp, setOtp] = useState([]);
    const firstInput = useRef(null);
    const secondInput = useRef(null);
    const thirdInput = useRef(null);
    const fourthInput = useRef(null);

    return (
        <View style={tw`w-full flex-row justify-center items-center ` }>
            <TextInput 
                style={tw`mx-2.5 h-12 w-12 border-2 rounded-md border-[#04825C]`}
                keyboardType="numeric"
                textAlign='center'
                selectionColor={"#04825C"}
                maxLength={1}
                ref={firstInput}
                autoFocus={true}
                returnKeyType="next"
                onChangeText={(text)=> {
                    text && secondInput.current.focus()
                }}
                // value={text}
                />
            <TextInput 
                style={tw`mx-2.5 h-12 w-12 border-2 rounded-md border-[#04825C]`}
                keyboardType="numeric"
                textAlign='center'
                selectionColor={"#04825C"}
                maxLength={1}
                returnKeyType="next"
                ref={secondInput}
                onChangeText={(text)=> {
                    text ? thirdInput.current.focus() : firstInput.current.focus()
                }}
                // value={text}
                />
            <TextInput 
                style={tw`mx-2.5 h-12 w-12 border-2 rounded-md  border-[#04825C]`}
                keyboardType="numeric"
                textAlign='center'
                selectionColor={"#04825C"}
                maxLength={1}
                returnKeyType="next"
                ref={thirdInput}  
                onChangeText={(text)=> {
                    text ? fourthInput.current.focus() : secondInput.current.focus()
                }}
                // value={text}
                />
            <TextInput 
                style={tw`mx-2.5 h-12 w-12 border-2 rounded-md border-[#04825C]`}
                keyboardType="numeric"
                textAlign='center'
                selectionColor={"#04825C"}
                maxLength={1}
                ref={fourthInput}
                returnKeyType="done"
                onChangeText={(text)=> {
                    !text && thirdInput.current.focus()
                }}
                // value={text}
                />
        </View>
    )
  }