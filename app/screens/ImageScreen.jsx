import React from "react";
import { Image, StyleSheet, View } from "react-native";
import AppButton from "../components/common/AppButton";
import AppText from "../components/common/AppText";

import colors from "../config/colors";

function ImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <AppText>Testing again!</AppText>
      <AppButton title="Login" onPress={() => console.log("tapped")} />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/laptop.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageScreen;
