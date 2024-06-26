import React from "react";
import { View, StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppText from "./AppText";

function card({ title, subTitle, imageUrl, onPress, thumbnailUrl }) {
  return (
    <GestureHandlerRootView>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            preview={{ uri: thumbnailUrl }}
            tint="light"
            uri={imageUrl}
          />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            <AppText style={styles.subTitle} numberOfLines={1}>
              {subTitle}
            </AppText>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: "bold",
    marginVertical: 2,
  },
  detailsContainer: {
    padding: 20,
  },
});
export default card;
