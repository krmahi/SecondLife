import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AnimationConfig from "./AnimationConfig";
import AccountScreen from "../screens/AccountScreen";
import MessageScreen from "../screens/MessageScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      transitionSpec: {
        open: AnimationConfig,
        close: AnimationConfig,
      },
    }}
  >
    <Stack.Screen
      name="Accountmain"
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Messages" component={MessageScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
