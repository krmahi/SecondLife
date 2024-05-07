import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible, style }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        style={[
          {
            width: "100%",
            height: "100%",
          },
          style,
        ]}
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
});

export default ActivityIndicator;
