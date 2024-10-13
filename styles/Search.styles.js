// ./styles/Search.styles.js
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
    searchHeader: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.colors.card,
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 12,
      marginHorizontal: 24,
      marginBottom: 18,
      marginTop: 14,
      shadowColor: "#000",
      // shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      // elevation: 5, // For Android shadow
    },

    searchInputContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    searchIcon: {
      marginRight: 8,
    },
    searchInput: {
      flex: 1,
      color: theme.colors.text,
      fontSize: 16,
    },
    clearButton: {
      padding: 4,
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
    promptText: {
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
    listContent: {
      paddingBottom: 56,
      paddingHorizontal: 16,
    },

    overview: {
      fontSize: 14,
      color: theme.colors.secondaryText,
      lineHeight: 20,
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
