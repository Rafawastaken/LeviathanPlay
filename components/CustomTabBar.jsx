// navigation/CustomTabBar.js
import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { useTheme } from "../styles/ThemeContext";

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const styles = createStyles(theme);

  return (
    <View style={[styles.tabBar, { paddingBottom: insets.bottom }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        // Determine if the tab is focused
        const isFocused = state.index === index;

        // Handle the press event
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        // Handle the long press event
        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        // Render the Home icon differently
        if (route.name === "Home") {
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.homeButtonContainer}
            >
              <View style={styles.homeButton}>
                <Icon name="home" size={28} color={theme.colors.text} />
              </View>
            </TouchableOpacity>
          );
        } else {
          // For other icons
          const iconName = getIconName(route.name);
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabButton}
            >
              <Icon
                name={iconName}
                size={24}
                color={
                  isFocused ? theme.colors.primary : theme.colors.iconInactive
                }
              />
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

const getIconName = (routeName) => {
  switch (routeName) {
    case "Top 100":
      return "star";
    case "Categories":
      return "grid";
    case "Most Recent":
      return "clock";
    case "Search":
      return "search";
    default:
      return "circle";
  }
};

const createStyles = (theme) =>
  StyleSheet.create({
    tabBar: {
      flexDirection: "row",
      backgroundColor: theme.colors.card,
      borderTopColor: theme.colors.border,
      borderTopWidth: 1,
      height: 60,
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 20,
    },
    tabButton: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    homeButtonContainer: {
      position: "absolute",
      bottom: 10,
      alignSelf: "center",
    },
    homeButton: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: theme.colors.primary,
      alignItems: "center",
      justifyContent: "center",
      elevation: 5,
      shadowColor: "#000",
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 5,
    },
  });

export default CustomTabBar;
