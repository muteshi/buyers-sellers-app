import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppPicker from "./app/components/common/AppPicker";
import AppTextInput from "./app/components/common/AppTextInput";
import Icon from "./app/components/common/Icon";
import ListItem from "./app/components/common/ListingItem";
import Screen from "./app/components/common/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ImageScreen from "./app/screens/ImageScreen";
import ListingDetailsScreen from "./app/screens/ListDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <ListingEditScreen />;
}
