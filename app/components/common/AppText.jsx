import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../../config/colors";

function AppText({ children, customStyles }) {
  return <Text style={[styles.text, customStyles]}>{children}</Text>;
}
const deviceSpecificStyles = Platform.select({
  ios: {
    fontSize: 20,
    fontFamily: "Avenir",
  },
  android: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
});
const styles = StyleSheet.create({
  text: {
    color: colors.white,
    ...deviceSpecificStyles,
  },
});

export default AppText;
