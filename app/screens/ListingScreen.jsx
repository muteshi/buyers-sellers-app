import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Card from "../components/common/Card";
import Screen from "../components/common/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "Dell Laptop for sale",
    price: 45600,
    image: require("../assets/laptop.jpg"),
  },
  {
    id: 2,
    title: "Iphone 6 for sale",
    price: 95600,
    image: require("../assets/iphone.jpg"),
  },
  {
    id: 3,
    title: "Vintage Car for sale",
    price: 1095600,
    image: require("../assets/car.jpg"),
  },
];

function ListingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`Ksh ${item.price.toFixed(2)}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.lighter,
  },
});

export default ListingScreen;
