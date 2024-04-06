import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.backgroud}
      source={require("../assets/background.png")}
    >
      <Image style={styles.logo} source={require("../assets/App_logo.png")} />
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroud: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#4ecdc4",
  },
  logo: {
    width: 91,
    height: 150,
    aspectRatio: 1,
    position: "absolute",
    top: 70,
  },
});

export default WelcomeScreen;
