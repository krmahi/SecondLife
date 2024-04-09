import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacked for Sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/user.jpg")}
            title="Jackson West"
            subTitle="5 Listings"
          ></ListItem>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 15,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 15,
  },
});

export default ListingDetailsScreen;
