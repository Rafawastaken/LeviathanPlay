// ./components/GenreSection.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import useMoviesByGenre from "../firebase/useMoviesByGenre";
import MovieCard from "./MovieCard";
import createStyles from "../styles/GenreSection.styles";
import { useTheme } from "../styles/ThemeContext";
import { useNavigation } from "@react-navigation/native";

const GenreSection = ({ genre }) => {
  const { movies, loading, error } = useMoviesByGenre(genre.genre_id); // No need to pass limitCount
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();

  const handleViewAll = () => {
    navigation.navigate("MoviesByGenre", {
      genreId: genre.genre_id,
      genreName: genre.genre_name,
    });
  };

  return (
    <View style={styles.genreSection}>
      <View style={styles.header}>
        <Text style={styles.genreName}>{genre.genre_name}</Text>
        <TouchableOpacity onPress={handleViewAll}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator size="small" color={theme.colors.primary} />
      ) : error ? (
        <Text style={styles.errorText}>Error loading movies</Text>
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id}
          horizontal={true}
          renderItem={({ item }) => <MovieCard movie={item} />}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.moviesList}
        />
      )}
    </View>
  );
};

export default GenreSection;
