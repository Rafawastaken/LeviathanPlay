// ./styles/MovieCard.styles.js
import { StyleSheet } from "react-native";

const createStyles = (theme) =>
  StyleSheet.create({
    card: {
      margin: 10, // Space between cards
      borderRadius: 10,
      overflow: "hidden",
      width: 150,
      height: 230, // Adjust based on how tall you want the cards
    },
    imageContainer: {
      position: "relative",
      width: "100%",
      height: "100%",
    },
    image: {
      width: "100%",
      height: "100%",
      borderRadius: 10,
      resizeMode: "cover", // Ensure image covers the entire card
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.3)", // Cinematic dark filter
      borderRadius: 10,
    },
    textContainer: {
      position: "absolute",
      bottom: 10, // Push text towards the bottom
      left: 10,
    },
    title: {
      color: "#ffffff", // White text for better contrast
      fontSize: 16,
      fontWeight: "bold",
      textShadowColor: "rgba(0, 0, 0, 0.75)", // Cinematic text shadow
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
  });

export default createStyles;
