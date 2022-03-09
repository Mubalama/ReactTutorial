import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  //const greetig = "Hello there";
  const greetig = <Text>Sure it is working here</Text>;
  return (
  <View>
  <Text style={styles.textStyle}>This is the components screen</Text>
  <Text>{greetig}</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    fontStyle: "italic"
  },
});

export default ComponentsScreen;
