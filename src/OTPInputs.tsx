import React, { useCallback, useState } from "react";
import { View, TextInput, NativeSyntheticEvent, TextInputKeyPressEventData } from "react-native";
import tw from "twrnc";

interface Props {
  numberOfInputs: 4 | 6;
}

export default function OTPInputs({ numberOfInputs }: Props) {
  const textInputRefs = Array.from({ length: numberOfInputs }).map(() =>
    React.createRef<TextInput>()
  );
  const [pin, setPin] = useState<string[]>(Array.from({ length: numberOfInputs }).map(() => ""));
  const onKeyPress = useCallback(
    (index) =>
      ({ nativeEvent: { key: keyValue } }: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        if (
          Array.from({ length: 10 })
            .map((_, index) => index.toString())
            .includes(keyValue)
        ) {
          setPin((value) => [...value.slice(0, index), keyValue, ...value.slice(index + 1)]);
          if (index + 1 < numberOfInputs) {
            textInputRefs[index + 1].current?.focus();
          }
        } else if (keyValue === "Backspace") {
          setPin((value) => [
            ...value.slice(0, index),
            ...Array.from({ length: numberOfInputs - index }).map(() => ""),
          ]);
          if (index - 1 >= 0) {
            textInputRefs[index - 1].current?.focus();
          }
        }
      },
    [numberOfInputs, textInputRefs]
  );
  return (
    <View style={tw`w-full flex-row justify-center items-center `}>
      {textInputRefs.map((value, index) => (
        <TextInput
          key={`textinput-${index}`}
          style={tw`mx-2.5 h-12 w-12 border-2 rounded-md border-[#04825C]`}
          keyboardType="numeric"
          textAlign="center"
          selectionColor="#04825C"
          maxLength={1}
          ref={value}
          autoFocus={index === 0}
          selectTextOnFocus
          onKeyPress={onKeyPress(index)}
          returnKeyType={index === numberOfInputs - 1 ? "done" : "next"}
          value={pin[index].toString()}
        />
      ))}
    </View>
  );
}
