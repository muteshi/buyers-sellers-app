import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import AppButton from "../components/common/AppButton";
import AppText from "../components/common/AppText";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={2}
      style={styles.background}
      source={require("../assets/welcome.jpg")}
    >
      <View style={styles.logoView}>
        <Image source={require("../assets/logo.png")} />
        <AppText customStyles={{ fontWeight: "bold", fontSize: 22 }}>
          Where Buyers Meet Sellers
        </AppText>
      </View>
      <View style={styles.btnContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  btnContainer: {
    padding: 20,
    width: "100%",
  },

  logoView: {
    alignItems: "center",
    position: "absolute",
    top: 80,
  },
});
