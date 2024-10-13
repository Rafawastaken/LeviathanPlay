// ./styles/GenreSection.styles.js
import { StyleSheet } from "react-native";

const createStyles = (theme) =>
  StyleSheet.create({
    genreSection: {
      marginTop: 16,
      marginBottom: 24,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginHorizontal: 16,
    },
    genreName: {
      color: theme.colors.text,
      fontSize: 20,
      fontWeight: "bold",
    },
    viewAllText: {
      color: theme.colors.primary,
      fontSize: 16,
    },
    errorText: {
      color: theme.colors.error || "red",
      marginHorizontal: 16,
    },
    moviesList: {
      paddingHorizontal: 16,
      paddingTop: 8,
    },
  });

export default createStyles;
