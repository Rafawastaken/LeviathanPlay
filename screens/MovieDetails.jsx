// MovieDetails.jsx
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "../styles/ThemeContext"; // Adjust the path based on your project structure

import createStyles from "../styles/MovieDetails.styles";
import { View, Text, Image, ScrollView } from "react-native";
import useMovie from "../firebase/useMovie";
import LoadingScreen from "../components/LoadingScreen";
import { Ionicons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";

const MovieDetails = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();
  const route = useRoute();
  const { movieId } = route.params;

  const { movie, loading, error } = useMovie(movieId);

  if (loading) {
    return (
      <LoadingScreen
        size={"large"}
        color={theme.colors.primary}
        position={styles.center}
      />
    );
  }

  const {
    backdrop_path,
    release_date,
    genre,
    source_link,
    title,
    overview_pt,
    rating,
    duration,
  } = movie;

  return (
    <ScrollView style={styles.container}>
      {/* Banner Image */}
      <Image
        source={{ uri: backdrop_path }}
        style={styles.bannerImage}
        resizeMode="cover"
      />

      {/* Movie Information */}
      <View style={styles.infoContainer}>
        {/* Title */}
        <Text style={styles.title}>{title}</Text>

        {/* Release Date, Genre, Duration, Rating */}
        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Ionicons
              name="calendar-outline"
              size={16}
              color={theme.colors.primary}
            />

            <Text style={styles.metaText}>{release_date}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="pricetags" size={16} color={theme.colors.primary} />
            <Text style={styles.metaText}>{genre}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons
              name="time-outline"
              size={16}
              color={theme.colors.primary}
            />
            <Text style={styles.metaText}>{duration} mins</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="star" size={16} color={theme.colors.iconActive} />
            <Text style={styles.metaText}>{rating}</Text>
          </View>
        </View>

        {/* Movie Resume */}
        <Text style={styles.resume}>{overview_pt}</Text>

        {/* Trailer Video */}
        <View style={styles.trailerContainer}>
          {source_link ? (
            <WebView
              source={{ uri: source_link }}
              style={styles.webview}
              allowsFullscreenVideo
            />
          ) : (
            <Text
              style={[styles.errorText, { color: theme.colors.error || "red" }]}
            >
              Movie not available.
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
