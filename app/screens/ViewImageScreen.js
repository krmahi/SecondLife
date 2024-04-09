import React from "react";
import { Image, View, StatusBar, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcons}>
        <MaterialCommunityIcons
          name="close"
          color="white"
          size={30}
        ></MaterialCommunityIcons>
      </View>
      <View style={styles.deleteIcons}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={35}
        ></MaterialCommunityIcons>
      </View>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        hidden={false}
      />
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/TVitem.png")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcons: {
    position: "absolute",
    top: 50,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcons: {
    position: "absolute",
    top: 50,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
