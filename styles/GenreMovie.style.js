// ./styles/GenreMovies.styles.js
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
    },
    headerText: {
      color: theme.colors.text,
      fontSize: 24,
      fontWeight: "bold",
      marginHorizontal: 16,
      marginVertical: 16,
    },
    errorText: {
      color: theme.colors.error || "red",
    },
    listContent: {
      paddingHorizontal: 8,
    },
  });

export default createStyles;
