// ./styles/MoviesByGenre.styles.js
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

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
      paddingHorizontal: 16,
    },
    listContent: {
      paddingBottom: 32, // Ensures space at the end of the list
      paddingHorizontal: 16,
    },
    errorText: {
      fontSize: 16,
      color: theme.colors.error || "red",
      textAlign: "center",
      marginBottom: 16,
    },
    noResultsText: {
      fontSize: 16,
      color: theme.colors.secondaryText,
      textAlign: "center",
    },
    retryButton: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginTop: 10,
    },
    retryButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "500",
    },
    footer: {
      height: 32, // Additional spacing at the end
    },
    backButton: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      marginTop: 10,
    },
    backButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "500",
    },
    item: {
      flexDirection: "row",
      alignItems: "flex-start",
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    image: {
      width: 60,
      height: 90,
      borderRadius: 8,
      marginRight: 16,
      backgroundColor: theme.colors.border,
    },
    textContainer: {
      flex: 1,
    },
    title: {
      fontSize: 16,
      fontWeight: "500",
      color: theme.colors.text,
      marginBottom: 4,
    },
    ratingContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 4,
    },
    ratingText: {
      fontSize: 14,
      color: theme.colors.secondaryText,
      marginLeft: 4,
    },
  });

export default createStyles;
