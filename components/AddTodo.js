import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function addTodo({ onSubmit }) {
  const [text, setText] = useState("");
  const onChangeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo.."
        onChangeText={onChangeHandler}
      />
      <Button onPress={() => onSubmit(text)} title="add todo" color="#30E641" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "ddd",
  },
});
