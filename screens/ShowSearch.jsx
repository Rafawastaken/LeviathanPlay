import {
  Text,
  View,
  TextInput,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../styles/ThemeContext";
import createStyles from "../styles/ShowsHome.styles";
import { Ionicons } from "@expo/vector-icons";
import CustomHeader from "../components/CustomHeader";
import useSearchShows from "../firebase/useSearchShows";
import ListItemCardShows from "../components/ListItemCardShows";

const ShowSearch = () => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const debouncedSetQuery = debounce((text) => {
    setDebouncedQuery(text);
  }, 300);

  const { shows, loading, error } = useSearchShows(debouncedQuery);

  useEffect(() => {
    debouncedSetQuery(query);
    return () => {
      debouncedSetQuery.cancel();
    };
  }, [query]);

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
          placeholder="Search for a Show"
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
      <CustomHeader title={"Search Shows"} />
      {/* Search Bar */}
      {renderHeader()}
      {/* Results */}
      {/* Search Results */}
      <FlatList
        data={shows}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItemCardShows
            action={() =>
              navigation.navigate("ShowDetails", { showId: item.id })
            }
            item={item}
            styles={styles}
            theme={theme}
          />
        )}
        ListEmptyComponent={
          debouncedQuery.length >= 3 ? (
            <View style={styles.center}>
              <Text style={styles.noResultsText}>No shows found.</Text>
            </View>
          ) : (
            <View style={styles.center}>
              <Text style={styles.promptText}>
                Start typing to search for shows.
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

export default ShowSearch;
