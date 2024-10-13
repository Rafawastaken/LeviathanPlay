// ./styles/Genres.styles.js
import { StyleSheet } from "react-native";

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    headerText: {
      color: theme.colors.text,
      fontSize: 24,
      fontWeight: "bold",
      marginHorizontal: 16,
      marginTop: 16,
      marginBottom: 8,
    },
    errorText: {
      color: theme.colors.error || "red",
    },
    listContent: {
      paddingBottom: 16,
    },
  });

export default createStyles;
