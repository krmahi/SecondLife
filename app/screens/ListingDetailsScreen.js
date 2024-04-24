import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import { Image } from "react-native-expo-image-cache";

import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import listings from "../api/listings";

function ListingDetailsScreen({ route }) {
  const Listing = route.params;

  return (
    <View>
      <Image
        style={styles.image}
        preview={{ uri: Listing.images[0].thumbnailUrl }}
        tint="light"
        uri={Listing.images[0].url}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{Listing.title}</AppText>
        <AppText style={styles.price}>${Listing.price}</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/user.jpg")}
          title="Jackson West"
          subTitle="5 Listings"
        ></ListItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    paddingLeft: 15,
    paddingTop: 15,
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
