// ./styles/Footer.styles.js
import { StyleSheet } from "react-native";

const createStyles = (theme) =>
  StyleSheet.create({
    tabBarStyle: {
      backgroundColor: theme.colors.card,
      borderTopColor: theme.colors.border,
      elevation: 0,
      height: 45,
      position: "absolute",
    },
    homeIconWrapper: {
      position: "relative",
      top: -5, // Adjusted from -20 to -10 to move the icon lower
      justifyContent: "center",
      alignItems: "center",
    },
    homeIconContainer: {
      width: 50,
      height: 50,
      borderRadius: 35,
      backgroundColor: theme.colors.primary,
      justifyContent: "center",
      alignItems: "center",
      elevation: 5, // For Android shadow
      shadowColor: "#000", // For iOS shadow
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    icon: {
      color: theme.colors.text,
    },
  });

export default createStyles;
