// ./styles/QuickActionCard.styles.js
import { StyleSheet } from "react-native";

const createStyles = () =>
  StyleSheet.create({
    card: {
      flex: 1,
      marginHorizontal: 5,
      height: 100,
      borderRadius: 10,
      overflow: "hidden",
    },
    gradient: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
  });

export default createStyles;
