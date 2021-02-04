import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/welcome.jpg")}
    >
      <View style={styles.logoView}>
        <Image source={require("../assets/logo.png")} />
        <Text>Where sellers meet buyers</Text>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.regButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#b00",
  },

  logoView: {
    alignItems: "center",
    position: "absolute",
    top: 80,
  },
  regButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#02BE6E",
  },
});
