import React from "react";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Icon({
  name,
  size = 40,
  backgroundColor = "#111",
  iconColor = "#fff",
  onPress,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FontAwesome
        name={name}
        size={size * 0.5}
        color={iconColor}
        onPress={onPress}
      />
    </View>
  );
}

export default Icon;
