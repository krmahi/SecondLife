import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../config/colors";

function AppButton({ title, textColor = "white", style }) {
  return (
    <Text style={[styles.text, { color: colors[textColor] }, style]}>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
    margin: 2,
  },
});

export default AppButton;
