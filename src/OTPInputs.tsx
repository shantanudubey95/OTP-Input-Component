import * as Clipboard from "expo-clipboard";
import React, { useCallback, useState } from "react";
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  Button,
  Text,
} from "react-native";
import tw from "twrnc";

interface Props {
  numberOfInputs: 4 | 6;
}

export default function OTPInputs({ numberOfInputs }: Props) {
  const textInputRefs = Array.from({ length: numberOfInputs }).map(() =>
    React.createRef<TextInput>()
  );
  const [copiedText, setCopiedText] = useState("");
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

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync("hello world");
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={tw`w-full flex-row justify-center items-center `}>
        {textInputRefs.map((value, index) => (
          <TextInput
            key={`textinput-${index}`}
            style={tw`mx-2.5 h-12 w-12 border-2 rounded-md border-[#04825C] font-bold text-xl`}
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
      <Button title="Click here to copy to Clipboard" onPress={copyToClipboard} />
      <Button title="View copied text" onPress={fetchCopiedText} />
      <Text>{copiedText}</Text>
    </View>
  );
}
