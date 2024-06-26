import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
// for app loading splash screen
import AppLoading from "expo-app-loading";

import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/Context";
import authStorage from "./app/auth/storage";
import { navigationRef } from "./app/navigation/rootNavigation";

//bugsnag not supported for latest expo-build
// import logger from "./app/utility/logger";

// logger.start();

export default function App() {
  // logger.log(new Error("Error Boundary"));
  const [user, setUser] = useState();
  const [isReady, setIsready] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onFinish={() => setIsready(true)}
        onError={null}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
        <OfflineNotice />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
