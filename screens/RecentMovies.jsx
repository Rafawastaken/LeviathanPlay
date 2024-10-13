// screens/RecentMovies.js
import React from "react";
import { View, FlatList } from "react-native";
import useRecentMovies from "../firebase/useRecentMovies";

// Theme
import { useTheme } from "../styles/ThemeContext";
import createStyles from "../styles/MostRecent.styles";

// Components
import CustomHeader from "../components/CustomHeader";
import LoadingScreen from "../components/LoadingScreen";
import ListItemCard from "../components/ListItemCard";

const RecentMovies = ({ navigation }) => {
  const { movies, loading, error } = useRecentMovies();
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

  return (
    <View style={styles.container}>
      <CustomHeader title="Most Recent Movies" navigation={navigation} />
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

export default RecentMovies;
