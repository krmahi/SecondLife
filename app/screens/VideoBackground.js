import React from "react";
import { StyleSheet } from "react-native";
import Video from "expo-av";

export const VideoBackground = ({ source }) => {
  return (
    <Video
      resizeMode="cover"
      muted={true}
      repeat
      source={require("../assets/background.mp4")}
      style={styles.backgroundVideo}
    />
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
