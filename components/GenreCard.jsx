// ./components/GenreCard.js
import React from "react";
import { TouchableOpacity, Text, ImageBackground } from "react-native";
import { useTheme } from "../styles/ThemeContext";
import createStyles from "../styles/GenreCard.styles";
import { LinearGradient } from "expo-linear-gradient";

const GenreCard = ({ genre, onPress }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground
        source={{ uri: genre.poster }}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.7)"]}
          style={styles.gradient}
        >
          <Text style={styles.title}>{genre.name}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default GenreCard;
