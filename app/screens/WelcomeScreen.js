import React from "react";

import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  StatusBar,
} from "react-native";

import AppText from "../components/AppText.js";
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
        <AppText style={styles.logoText}>
          {"Give u'r Items a Second Life"}
        </AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title={"register"}
          color="WelcomeScreenPrimary"
          textColor="primary"
        ></AppButton>
        <AppButton title={"Login"} color="WelcomeScreenSecondary"></AppButton>
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
    fontStyle: "italic",
  },
});

export default WelcomeScreen;
