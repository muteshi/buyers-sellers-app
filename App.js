import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "./app/components/common/Icon";
import ListItem from "./app/components/common/ListingItem";
import Screen from "./app/components/common/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ImageScreen from "./app/screens/ImageScreen";
import ListingDetailsScreen from "./app/screens/ListDetailsScreen";
import ListingScreen from "./app/screens/ListingScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <ListingScreen />;
}
