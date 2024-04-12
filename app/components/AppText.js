import React from "react";
import { Text } from "react-native";

import defaultstyles from "../config/styles";

function AppText({ children, style, ...otherprops }) {
  return (
    <Text style={[defaultstyles.text, style]} {...otherprops}>
      {children}
    </Text>
  );
}

export default AppText;
