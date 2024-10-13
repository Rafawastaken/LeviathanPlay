import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../styles/ThemeContext";
import createStyles from "../styles/Search.styles";
import CustomHeader from "../components/CustomHeader";
import ListItemCard from "../components/ListItemCard";
import { Ionicons } from "@expo/vector-icons";
import useSearchMovies from "../firebase/useSearchMovies";
import { useNavigation } from "@react-navigation/native";
import debounce from "lodash.debounce";

const Search = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce the search input to prevent excessive queries
  const debouncedSetQuery = debounce((text) => {
    setDebouncedQuery(text);
  }, 300);

  const { movies, loading, error } = useSearchMovies(debouncedQuery);

  useEffect(() => {
    debouncedSetQuery(query);
    return () => {
      debouncedSetQuery.cancel();
    };
  }, [query]);

  // Define the Header Component
  const renderHeader = () => (
    <View style={styles.searchHeader}>
      <View style={styles.searchInputContainer}>
        <Ionicons
          name="search"
          size={20}
          color={theme.colors.placeholderText}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a Movie"
          placeholderTextColor={theme.colors.placeholderText}
          value={query}
          onChangeText={setQuery}
          autoFocus
          returnKeyType="search"
          clearButtonMode="while-editing" // Adds a clear button on iOS
        />
        {query.length > 0 && (
          <TouchableOpacity
            onPress={() => setQuery("")}
            style={styles.clearButton}
            accessibilityLabel="Clear search input"
          >
            <Ionicons
              name="close-circle"
              size={20}
              color={theme.colors.placeholderText}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <CustomHeader title="Search" navigation={navigation} />
      {/* Search Bar */}
      {renderHeader()}

      {/* Search Results */}
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
        ListEmptyComponent={
          debouncedQuery.length >= 3 ? (
            <View style={styles.center}>
              <Text style={styles.noResultsText}>No movies found.</Text>
            </View>
          ) : (
            <View style={styles.center}>
              <Text style={styles.promptText}>
                Start typing to search for movies.
              </Text>
            </View>
          )
        }
        ListFooterComponent={
          loading ? (
            <View style={styles.footer}>
              <ActivityIndicator size="small" color={theme.colors.primary} />
            </View>
          ) : null
        }
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default Search;
