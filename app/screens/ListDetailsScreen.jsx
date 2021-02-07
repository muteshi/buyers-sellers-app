import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/common/AppText";
import ListItem from "../components/common/ListingItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/laptop.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Laptop for sale</AppText>
        <AppText style={styles.price}>Ksh 42,000</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/user.png")}
            title="Superman Noface"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: { width: "100%", height: 300 },
  detailsContainer: {
    padding: 20,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 30,
  },
});

export default ListingDetailsScreen;
