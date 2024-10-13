// ./styles/Home.styles.js
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
    welcomeText: {
      color: theme.colors.text,
      fontSize: 24, // Increased font size
      fontWeight: "bold",
      marginBottom: 6,
      marginTop: 18,
      marginHorizontal: 16,
      textAlign: "center",
    },
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 16,
      marginTop: 20,
      backgroundColor: "#2C2F33", // Lighter background
      borderRadius: 8,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: "#3C3F43", // Lighter border
    },
    searchIcon: {
      marginRight: 8,
    },
    searchInput: {
      flex: 1,
      color: theme.colors.text,
      fontSize: 16,
      paddingVertical: 8,
    },
    quickActionsContainer: {
      marginHorizontal: 16,
      marginTop: 20,
    },
    quickActionsRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    },
    quickActionCard: {
      flex: 1,
      marginHorizontal: 5,
      height: 80,
      borderRadius: 8,
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
      // Optional: Add shadow for better visibility
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5, // For Android shadow
      backgroundColor: "transparent", // Ensure background is transparent to show gradient
    },
    quickActionText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "500",
      textAlign: "center",
      zIndex: 1, // Ensure text is above the gradient
    },
    sectionHeader: {
      color: theme.colors.text,
      fontSize: 20,
      fontWeight: "bold",
      marginHorizontal: 16,
      marginTop: 20,
      marginBottom: 10,
    },
    listContent: {
      paddingBottom: 20,
    },
    errorText: {
      color: theme.colors.error || "red",
      fontSize: 16,
    },
    item: {
      flexDirection: "row",
      alignItems: "flex-start",
      paddingVertical: 12,
      paddingHorizontal: 16,
      marginBottom: 10, // Adds space between items
    },
    image: {
      width: 60,
      height: 90,
      borderRadius: 8,
      marginRight: 16,
      backgroundColor: theme.colors.border,
      resizeMode: "cover", // Ensures the image covers the space
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
    overview: {
      fontSize: 14,
      color: theme.colors.secondaryText,
      lineHeight: 20,
    },
  });

export default createStyles;
