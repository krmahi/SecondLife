import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import AnimationConfig from "./AnimationConfig";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      presentation: "modal",
      gestureEnabled: true,
      gestureResponseDistance: 500,
      transitionSpec: {
        open: AnimationConfig,
        close: AnimationConfig,
      },
    }}
  >
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen name="ListingsDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
