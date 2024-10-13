// ./components/MovieCard.js
import React from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import createStyles from "../styles/MovieCard.styles";
import { useTheme } from "../styles/ThemeContext";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient

const MovieCard = ({ movie }) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = createStyles(theme);

  const handlePress = () => {
    navigation.navigate("MovieDetails", { movieId: movie.id });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.imageContainer}>
        {/* Movie image */}
        <Image source={{ uri: movie.image }} style={styles.image} />

        {/* Cinematic overlay with gradient */}
        <LinearGradient
          colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.2)"]} // Darker overlay
          style={styles.overlay}
        />

        {/* Movie title displayed over the image */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{movie.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
