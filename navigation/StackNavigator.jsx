// ./navigation/StackNavigator.js
import { useTheme } from "../styles/ThemeContext";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./BottomTabNavigator";
import CustomHeader from "../components/CustomHeader";
import MovieDetails from "../screens/MovieDetails";
import MoviesByGenre from "../screens/MoviesByGenre";
import RecentlyAdded from "../screens/RecentlyAdded";
import TermsOfService from "../screens/TermsOfService";

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
    </Stack.Navigator>
  );
};

export default StackNavigator;
