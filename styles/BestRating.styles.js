// styles/BestRating.styles.js
import { StyleSheet } from "react-native";

const createStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    listContent: {
      paddingVertical: 8,
    },
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    errorText: {
      color: theme.colors.text,
      fontSize: 16,
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
    overview: {
      fontSize: 14,
      color: theme.colors.secondaryText,
      lineHeight: 20,
    },
  });

export default createStyles;
