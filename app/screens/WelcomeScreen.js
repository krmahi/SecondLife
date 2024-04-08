import React from "react";

import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  StatusBar,
  Text,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.png")}
    >
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        hidden={false}
      />
      <Image style={styles.logo} source={require("../assets/logowtext.png")} />
      <View style={styles.loginButton}>
        <Text style={styles.Rtext}>Register</Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.Ltext}>Login</Text>
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
  loginButton: {
    width: "80%",
    height: 70,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  registerButton: {
    width: "80%",
    height: 60,
    backgroundColor: "#D2862F",
    borderRadius: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 220,
    height: 108,
    // aspectRatio: 1,
    position: "absolute",
    top: 70,
  },
  Rtext: {
    color: "#D2862F",
    fontSize: 30,
    fontWeight: "bold",
  },
  Ltext: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
