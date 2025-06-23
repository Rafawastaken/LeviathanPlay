import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../styles/ThemeContext";
import createStyles from "../styles/ShowDetail.style";
import useShow from "../firebase/useShow";
import LoadingScreen from "../components/LoadingScreen";

const ShowDetails = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();
  const route = useRoute();
  const { showId } = route.params; // Firestore document ID

  console.log("Show ID:", showId);

  const { show, loading, error } = useShow(showId);
  const [selectedSeason, setSelectedSeason] = useState("1");

  if (loading) {
    return (
      <LoadingScreen
        size="large"
        color={theme.colors.primary}
        position={styles.center}
      />
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>
          Something went wrong: {error.message}
        </Text>
      </View>
    );
  }

  if (!show) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Show not found.</Text>
      </View>
    );
  }

  // Destructure data from Firestore
  const { meta_data = {}, seasons = {} } = show;
  // Destructure needed meta_data fields and also get tmdbId from meta_data.id
  const {
    backdrop_url,
    release_date,
    genre,
    rating,
    desc,
    title,
    crawled_status,
    id: tmdbId, // Use this as the TMDB id for fallback link
  } = meta_data;

  // Get sorted season keys
  const seasonKeys = Object.keys(seasons).sort(
    (a, b) => parseInt(a) - parseInt(b)
  );
  if (seasonKeys.length === 0) {
    return (
      <ScrollView style={styles.container}>
        {/* Banner */}
        <Image
          source={{ uri: backdrop_url }}
          style={styles.bannerImage}
          resizeMode="cover"
        />

        {/* Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
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
              <Ionicons
                name="pricetags"
                size={16}
                color={theme.colors.primary}
              />
              <Text style={styles.metaText}>
                {Array.isArray(genre) ? genre.join(", ") : genre}
              </Text>
            </View>
            <View style={styles.metaItem}>
              <Ionicons name="star" size={16} color={theme.colors.iconActive} />
              <Text style={styles.metaText}>{rating}</Text>
            </View>
          </View>

          <Text style={styles.resume}>{desc || "No overview available."}</Text>
          <Text style={styles.errorText}>No seasons found for this show.</Text>
        </View>
      </ScrollView>
    );
  }

  const currentSeasonData = seasons[selectedSeason];
  const { episodes = {}, meta_data: seasonMeta = {} } = currentSeasonData || {};
  const episodeKeys = Object.keys(episodes).sort(
    (a, b) => parseInt(a) - parseInt(b)
  );

  return (
    <ScrollView style={styles.container}>
      {/* Banner */}
      <Image
        source={{ uri: backdrop_url }}
        style={styles.bannerImage}
        resizeMode="cover"
      />

      {/* Show Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>

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
            <Text style={styles.metaText}>
              {Array.isArray(genre) ? genre.join(", ") : genre}
            </Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="star" size={16} color={theme.colors.iconActive} />
            <Text style={styles.metaText}>{rating}</Text>
          </View>
        </View>

        <Text style={styles.resume}>{desc || "No overview available."}</Text>

        {crawled_status && (
          <Text style={styles.metaText}>
            Status: {crawled_status.toUpperCase()}
          </Text>
        )}

        {/* Season Picker */}
        <View style={styles.pickerContainer}>
          <Text style={styles.pickerLabel}>Select Season:</Text>
          <Picker
            selectedValue={selectedSeason}
            onValueChange={(itemValue) => setSelectedSeason(itemValue)}
            style={styles.picker}
            mode="dropdown"
          >
            {seasonKeys.map((seasonKey) => (
              <Picker.Item
                key={seasonKey}
                label={`Season ${seasonKey}`}
                value={seasonKey}
              />
            ))}
          </Picker>
        </View>

        {/* Season-level Info */}
        <View style={styles.seasonInfo}>
          <Text style={styles.seasonTitle}>
            Season {selectedSeason} - {seasonMeta?.total_ep || 0} episodes
          </Text>
          {seasonMeta?.overview && (
            <Text style={styles.resume}>{seasonMeta.overview}</Text>
          )}
        </View>

        {/* Episode List */}
        {episodeKeys.map((epKey) => {
          const epData = episodes[epKey];
          const {
            id,
            image,
            overview,
            rating: epRating,
            duration,
            release_date: epRelease,
            source_link,
          } = epData;

          return (
            <View key={epKey} style={styles.episodeCard}>
              {image ? (
                <Image
                  source={{ uri: image }}
                  style={styles.episodeImage}
                  resizeMode="cover"
                />
              ) : (
                <Text style={styles.errorText}>No image available</Text>
              )}

              <Text style={styles.episodeTitle}>
                Episode {epKey}: {duration} mins
              </Text>
              <View style={styles.metaContainer}>
                <View style={styles.metaItem}>
                  <Ionicons
                    name="calendar-outline"
                    size={14}
                    color={theme.colors.primary}
                  />
                  <Text style={styles.metaText}>{epRelease}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Ionicons
                    name="star"
                    size={14}
                    color={theme.colors.iconActive}
                  />
                  <Text style={styles.metaText}>{epRating}</Text>
                </View>
              </View>

              <Text style={styles.episodeOverview}>
                {overview || "No episode overview."}
              </Text>

              {/* Link to EpisodePlayer */}
              <TouchableOpacity
                style={styles.linkButton}
                onPress={() =>
                  navigation.navigate("EpisodePlayer", {
                    sourceLink: source_link, // Use the destructured variable from epData
                    episodeId: epKey,
                    episodeTitle: `Episode ${epKey}`,
                    tmdbId: tmdbId, // from meta_data.id
                    seasonNumber: selectedSeason,
                    episodeNumber: epKey,
                    episodeImage: image,
                  })
                }
              >
                <Text style={styles.linkButtonText}>
                  {source_link ? "Watch Episode" : "Bad Ads Version"}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default ShowDetails;
