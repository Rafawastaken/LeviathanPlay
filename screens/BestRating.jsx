// screens/BestRating.js
import React from "react";
import { View, Text, FlatList } from "react-native";
import useTopReviewedMovies from "../firebase/useTopReviewedMovies";

// Themes
import { useTheme } from "../styles/ThemeContext";
import createStyles from "../styles/BestRating.styles";

// Components
import CustomHeader from "../components/CustomHeader";
import LoadingScreen from "../components/LoadingScreen";
import ListItemCard from "../components/ListItemCard";

const BestRating = ({ navigation }) => {
  const { movies, loading, error } = useTopReviewedMovies();
  const theme = useTheme();
  const styles = createStyles(theme);

  if (loading) {
    return (
      <LoadingScreen
        size={"large"}
        color={theme.colors.primary}
        position={styles.center}
      />
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={[styles.errorText, { color: theme.colors.text }]}>
          Error: {error}
        </Text>
      </View>
    );
  }

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <CustomHeader title="Top 100" navigation={navigation} />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
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
      />
    </View>
  );
};

export default BestRating;
