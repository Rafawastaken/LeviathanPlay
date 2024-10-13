// ./screens/Genres.jsx
import React from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import useGenres from "../firebase/useGenres";
import { useTheme } from "../styles/ThemeContext";

import createStyles from "../styles/Genres.styles";

import GenreSection from "../components/GenreSection";
import CustomHeader from "../components/CustomHeader";
import LoadingScreen from "../components/LoadingScreen";

const Genres = ({ navigation }) => {
  const { genres, loading, error } = useGenres();
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
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CustomHeader title="Movies By Genre" navigation={navigation} />
      <FlatList
        data={genres}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GenreSection genre={item} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default Genres;
