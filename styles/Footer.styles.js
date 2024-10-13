// ./styles/Footer.styles.js
import { StyleSheet } from "react-native";

const createStyles = (theme) =>
  StyleSheet.create({
    footerContainer: {
      alignItems: "center",
      paddingBottom: 50,
    },
    footerText: {
      color: theme.colors.footerText,
      fontSize: 10,
      textAlign: "center",
      marginBottom: 5,
      marginTop: -5,
      paddingBottom: 0,
    },
    linkText: {
      color: theme.colors.primary,
      fontSize: 8,
      textDecorationLine: "underline",
      marginTop: 5,
    },
    versionColor: {
      color: theme.colors.primary,
    },
  });

export default createStyles;
