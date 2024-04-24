import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible }) {
  if (!visible) return null;

  return (
    <View>
      <LottieView
        style={{
          width: "100%",
          height: "100%",
        }}
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
}

export default ActivityIndicator;