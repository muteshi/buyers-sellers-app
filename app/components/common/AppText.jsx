import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../../config/colors";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
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
    color: colors.dark,
    ...deviceSpecificStyles,
  },
});

export default AppText;
