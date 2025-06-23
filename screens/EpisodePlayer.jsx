import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";
import { useTheme } from "../styles/ThemeContext";
import createStyles from "../styles/EpisodePlayer.styles";
import LoadingScreen from "../components/LoadingScreen";

const EpisodePlayer = () => {
  const navigation = useNavigation();
  const route = useRoute();

  /**
   * We expect either:
   *   sourceLink: The direct link for the player
   * OR we build a fallback if not provided.
   *
   * We also expect tmdbId, seasonNumber, episodeNumber if we want
   * to build the fallback URL: "https://vidlink.pro/tv/:tmdbId/:seasonNumber/:episodeNumber"
   */
  const {
    sourceLink,
    episodeId,
    episodeTitle,
    tmdbId, // used for fallback
    seasonNumber, // used for fallback
    episodeNumber, // used for fallback
  } = route.params || {};

  const theme = useTheme();
  const styles = createStyles(theme);

  /**
   * If sourceLink is missing, build a fallback
   * e.g. https://vidlink.pro/tv/12345/1/2
   * Only if we have enough info (tmdbId, seasonNumber, episodeNumber)
   */
  let finalLink = sourceLink;
  if (!finalLink) {
    if (tmdbId && seasonNumber && episodeNumber) {
      finalLink = `https://vidlink.pro/tv/${tmdbId}/${seasonNumber}/${episodeNumber}`;
      console.log("[INFO] No sourceLink provided. Using fallback:", finalLink);
    } else {
      // If we don't have enough info to build fallback, finalLink remains null
      console.log(
        "[WARN] No sourceLink and no fallback info (tmdbId/seasonNumber/episodeNumber)."
      );
    }
  }

  // If still no link, just show an error
  if (!finalLink) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>
          Source not available for this episode.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color={theme.colors.primary} />
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {episodeTitle || `Episode ${episodeId}`}
        </Text>
      </View>

      {/* WebView for video playback */}
      <WebView
        source={{ uri: finalLink }}
        style={styles.webview}
        allowsFullscreenVideo
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        injectedJavaScript={`
          (function() {
            var meta = document.createElement('meta'); 
            meta.setAttribute('name', 'viewport'); 
            meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1');
            document.getElementsByTagName('head')[0].appendChild(meta);
          })();
        `}
        startInLoadingState
        renderLoading={() => (
          <LoadingScreen
            size="large"
            color={theme.colors.primary}
            position={styles.center}
          />
        )}
      />
    </View>
  );
};

export default EpisodePlayer;
