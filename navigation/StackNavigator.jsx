// ./navigation/StackNavigator.js
import { useTheme } from "../styles/ThemeContext";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import CustomHeader from "../components/CustomHeader";
import MovieDetails from "../screens/MovieDetails";
import MoviesByGenre from "../screens/MoviesByGenre";
import RecentlyAdded from "../screens/RecentlyAdded";
import TermsOfService from "../screens/TermsOfService";
import ShowSearch from "../screens/ShowSearch";
import ShowDetails from "../screens/ShowDetail";
import EpisodePlayer from "../screens/EpisodePlayer";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, route, options }) => (
          <CustomHeader title={options.title} navigation={navigation} />
        ),
        headerStyle: {
          backgroundColor: theme.colors.card,
        },
        headerTintColor: theme.colors.text,
      }}
    >
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={{ title: "Movie Details" }}
      />
      <Stack.Screen
        name="MoviesByGenre"
        component={MoviesByGenre}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecentlyAdded"
        component={RecentlyAdded}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TermsOfService"
        component={TermsOfService}
        options={{ title: "Terms of Service" }}
      />

      {/* Tv Shows */}
      <Stack.Screen
        name="ShowSearch"
        component={ShowSearch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ShowDetails"
        component={ShowDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EpisodePlayer"
        component={EpisodePlayer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
