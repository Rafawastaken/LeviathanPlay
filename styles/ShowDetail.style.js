import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
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
      color: theme.colors.text,
      marginLeft: 4,
    },
    resume: {
      fontSize: 16,
      color: theme.colors.text,
      lineHeight: 22,
      marginBottom: 16,
    },
    pickerContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 12,
    },
    pickerLabel: {
      fontSize: 16,
      color: theme.colors.text,
      marginRight: 8,
    },
    picker: {
      flex: 1,
      height: 40,
      color: theme.colors.text,
    },
    seasonInfo: {
      marginBottom: 16,
    },
    seasonTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: theme.colors.text,
      marginBottom: 6,
    },
    episodeCard: {
      marginBottom: 16,
      backgroundColor: theme.colors.cardBackground || "#252525",
      borderRadius: 8,
      padding: 10,
    },
    episodeImage: {
      width: "100%",
      height: 180,
      borderRadius: 6,
      marginBottom: 8,
    },
    episodeTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: theme.colors.text,
      marginBottom: 4,
    },
    episodeOverview: {
      fontSize: 14,
      color: theme.colors.text,
      marginBottom: 8,
      lineHeight: 18,
    },
    trailerContainer: {
      marginTop: 8,
    },
    webview: {
      height: 220,
      borderRadius: 8,
      overflow: "hidden",
      width: width - 32,
      alignSelf: "center",
    },
    linkButton: {
      backgroundColor: theme.colors.primary,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignSelf: "center",
      marginTop: 10,
      width: "100%",
    },
    linkButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
    errorText: {
      fontSize: 16,
      color: theme.colors.error || "red",
      textAlign: "center",
      marginVertical: 8,
    },
  });

export default createStyles;
