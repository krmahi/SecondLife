import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import colors from "../config/colors";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        hidden={false}
        animated={true}
        barStyle={"dark-content"}
      />
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
export default Screen;
