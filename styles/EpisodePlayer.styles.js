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
    // Banner image at the top
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
      color: theme.colors.text,
      marginLeft: 4,
    },
    resume: {
      fontSize: 16,
      color: theme.colors.text,
      lineHeight: 24,
      marginBottom: 16,
    },
    playerContainer: {
      marginTop: 16,
    },
    webview: {
      height: 250,
      borderRadius: 8,
      overflow: "hidden",
      width: width,
      alignSelf: "center",
    },
    errorText: {
      fontSize: 16,
      color: theme.colors.error || "red",
      textAlign: "center",
      marginBottom: 16,
    },
  });

export default createStyles;
