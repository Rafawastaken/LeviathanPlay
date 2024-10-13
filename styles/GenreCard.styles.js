// ./styles/GenreCard.styles.js
import { StyleSheet, Dimensions } from "react-native";

const CARD_WIDTH = Dimensions.get("window").width * 0.7;

const createStyles = (theme) =>
  StyleSheet.create({
    card: {
      width: CARD_WIDTH,
      marginHorizontal: 8,
      height: 250,
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: theme.colors.card,
    },
    imageBackground: {
      flex: 1,
    },
    image: {
      borderRadius: 10,
    },
    gradient: {
      flex: 1,
      justifyContent: "flex-end",
      borderRadius: 10,
    },
    title: {
      color: theme.colors.text,
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 16,
    },
  });

export default createStyles;
