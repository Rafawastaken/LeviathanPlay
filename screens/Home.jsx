// ./screens/Home.jsx
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useTheme } from "../styles/ThemeContext";
import createStyles from "../styles/Home.styles";
import CustomHeader from "../components/CustomHeader";
import LoadingScreen from "../components/LoadingScreen";
import ListItemCard from "../components/ListItemCard";
import { Ionicons } from "@expo/vector-icons";
import useRandomMovies from "../firebase/useRandomMovies";
import AnimatedGradientCard from "../components/AnimatedGradientCard";
import Footer from "../components/Footer";
import VersionController from "../components/VersionController";

const Home = ({ navigation }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  const { movies, loading, error } = useRandomMovies(10);

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
          Error: {error.message}
        </Text>
      </View>
    );
  }

  // Define the Header Component
  const renderHeader = () => (
    <>
      {/* First part: Version Control */}
      <VersionController />
      {/* Second Part: Welcome Text */}
      <Text style={styles.welcomeText}>Welcome to LeviathanPlay</Text>

      {/* Third Part: Search Bar */}
      <TouchableOpacity
        style={styles.searchContainer}
        onPress={() => navigation.navigate("Search")}
        activeOpacity={0.8}
      >
        <Ionicons
          name="search"
          size={20}
          color={theme.colors.placeholderText}
          style={styles.searchIcon}
        />
        <Text style={styles.searchInput}>Search for a Movie</Text>
      </TouchableOpacity>

      {/* Fourth Part: Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <View style={styles.quickActionsRow}>
          <AnimatedGradientCard
            onPress={() => navigation.navigate("Top 100")}
            title="Top 100 Movies"
            styles={styles}
          />
          <AnimatedGradientCard
            onPress={() => navigation.navigate("Categories")}
            title="Movie Genres"
            styles={styles}
          />
        </View>
        <View style={styles.quickActionsRow}>
          <AnimatedGradientCard
            onPress={() => navigation.navigate("Most Recent")}
            title="Most Recent"
            styles={styles}
          />
          <AnimatedGradientCard
            onPress={() => navigation.navigate("RecentlyAdded")}
            title="Recently Added"
            styles={styles}
          />
        </View>
      </View>

      {/* Fifth Part: Section Header */}
      <Text style={styles.sectionHeader}>Based on your preferences</Text>
    </>
  );

  return (
    <View style={styles.container}>
      {/* First Part: Header */}
      <CustomHeader title="LeviathanPlay" navigation={navigation} />
      <FlatList
        ListHeaderComponent={renderHeader}
        ListFooterComponent={<Footer />}
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
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default Home;
