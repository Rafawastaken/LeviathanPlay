// ./screens/MoviesByGenre.jsx
import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../styles/ThemeContext";
import createStyles from "../styles/MoviesByGenre.styles";

import CustomHeader from "../components/CustomHeader";
import ListItemCard from "../components/ListItemCard";
import LoadingScreen from "../components/LoadingScreen";

import usePaginatedMoviesByGenre from "../firebase/usePaginatedMoviesByGenre"; // Import the new paginated hook

const MoviesByGenre = ({ route, navigation }) => {
  const { genreId, genreName } = route.params; // Receiving genre details via navigation
  const { movies, loading, error, fetchMoreMovies, hasMore } =
    usePaginatedMoviesByGenre(
      genreId,
      20 // You can adjust the page size as needed
    );
  const theme = useTheme();
  const styles = createStyles(theme);

  // Define the Header Component
  const renderHeader = () => (
    <CustomHeader title={genreName} navigation={navigation} />
  );

  // Define the Footer Component for loading more movies
  const renderFooter = () => {
    if (!hasMore) return <View style={styles.footer} />; // No more movies to load

    return (
      <View style={styles.footer}>
        {loading ? (
          <ActivityIndicator size="small" color={theme.colors.primary} />
        ) : (
          <TouchableOpacity
            onPress={() => fetchMoreMovies(true)}
            style={styles.loadMoreButton}
            accessibilityLabel="Load more movies"
          >
            <Text style={styles.loadMoreText}>Load More</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  // Define the Empty Component
  const renderEmptyComponent = () => (
    <View style={styles.center}>
      <Text style={styles.noResultsText}>No movies found in this genre.</Text>
    </View>
  );

  // Handle Initial Loading State
  if (loading && movies.length === 0) {
    return (
      <LoadingScreen
        size={"large"}
        color={theme.colors.primary}
        position={styles.center}
      />
    );
  }

  // Handle Error State
  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>
          {error.message || "An error occurred while fetching movies."}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
          accessibilityLabel="Go back to Genres screen"
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      {renderHeader()}

      {/* Movies List */}
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItemCard
            action={() =>
              navigation.navigate("MovieDetails", { movieId: item.id })
            }
            item={item}
            styles={styles}
            theme={theme}
          />
        )}
        ListEmptyComponent={renderEmptyComponent}
        contentContainerStyle={styles.listContent}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (!loading && hasMore) {
            fetchMoreMovies(true);
          }
        }}
      />
    </View>
  );
};

export default MoviesByGenre;
