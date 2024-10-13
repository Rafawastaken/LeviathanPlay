// ./styles/MovieDetails.styles.js
import { StyleSheet, Platform, Dimensions } from "react-native";

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
    backButton: {
      position: "absolute",
      top: Platform.OS === "ios" ? 50 : 20, // Adjust for status bar
      left: 20,
      zIndex: 10,
      backgroundColor: "rgba(0,0,0,0.5)",
      borderRadius: 20,
      padding: 5,
    },
    bannerImage: {
      width: "100%",
      height: 200,
    },
    infoContainer: {
      padding: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme.colors.text,
      marginBottom: 12,
    },
    metaContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom: 8,
    },
    metaItem: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: 16,
      marginBottom: 8,
    },
    metaText: {
      fontSize: 14,
      color: theme.colors.text, // Changed to primary blue
      marginLeft: 4,
    },
    resume: {
      fontSize: 16,
      color: theme.colors.text,
      lineHeight: 24,
      marginBottom: 16,
    },
    trailerContainer: {
      marginTop: 16,
    },
    trailerTitle: {
      fontSize: 20,
      fontWeight: "600",
      color: theme.colors.text,
      marginBottom: 8,
    },
    webview: {
      height: 250, // Increased height for better visibility of controllers
      borderRadius: 8,
      overflow: "hidden",
      width: width, // Adjust width based on padding
      alignSelf: "center",
    },
    errorText: {
      fontSize: 16,
      color: theme.colors.error || "red",
      textAlign: "center",
      marginBottom: 16,
    },
    retryButton: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    retryButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "500",
    },
  });

export default createStyles;
