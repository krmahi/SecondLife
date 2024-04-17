import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import routes from "../navigation/routes";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: routes.MESSAGES,
  },
];

function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.Screen}>
      <View style={styles.container}>
        <ListItem
          style={{ backgroundColor: colors.white }}
          title="Mahi Averns"
          subTitle="mahesh.kr.2277@gmail.com"
          image={require("../assets/mahi_pic.png")}
        ></ListItem>
      </View>
      <View style={styles.container}>
        <FlatList
          ItemSeparatorComponent={ListItemSeperator}
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          renderItem={({ item }) => (
            <ListItem
              style={{ backgroundColor: colors.white }}
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        ></FlatList>
      </View>
      <ListItem
        style={{ backgroundColor: colors.white }}
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor="#DD3F74" />}
      ></ListItem>
    </Screen>
  );
}

const styles = StyleSheet.create({
  Screen: {
    backgroundColor: colors.lightgrey,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
