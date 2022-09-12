import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "#30E641",
  },
  title: {
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
  },
});
