import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: Platform.OS === "ios" ? 50 : 20,
      paddingHorizontal: 16,
      paddingBottom: 10,
      backgroundColor: theme.colors.background,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border || "#ccc",
    },
    backButton: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: 8,
    },
    backButtonText: {
      marginLeft: 6,
      fontSize: 16,
      color: theme.colors.primary,
    },
    headerTitle: {
      flex: 1,
      textAlign: "center",
      fontSize: 20,
      fontWeight: "bold",
      color: theme.colors.text,
    },
    webview: {
      flex: 1,
      width: width,
      height: height - 100,
    },
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 16,
      backgroundColor: theme.colors.background,
    },
    errorText: {
      fontSize: 16,
      color: theme.colors.error || "red",
      textAlign: "center",
      marginBottom: 16,
    },
  });

export default createStyles;
