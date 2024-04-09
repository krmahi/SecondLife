import React from "react";

import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  StatusBar,
  Text,
} from "react-native";

import AppButton from "../components/AppButton.js";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={7}
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        hidden={false}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logowtext.png")}
        />
        <Text style={styles.logoText}>Give u'r Items a Second Life</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Register"
          textColor="WelcomeScreenSeconadary"
        ></AppButton>
        <AppButton title="Login"></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    paddingVertical: 30,
    width: "100%",
  },
  logo: {
    width: 220,
    height: 108,
  },
  logoContainer: {
    position: "absolute",
    top: 60,
    alignItems: "center",
  },
  logoText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontStyle: "italic",
  },
});

export default WelcomeScreen;
