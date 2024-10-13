// navigation/BottomTabNavigator.js
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import BestRating from "../screens/BestRating";
import Genres from "../screens/Genres";
import Home from "../screens/Home";
import RecentMovies from "../screens/RecentMovies";
import Search from "../screens/Search";

// Assets
import Icon from "react-native-vector-icons/Feather";
import { useTheme } from "../styles/ThemeContext";
import createStyles from "../styles/BottomNavigation.styles";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false, // Hide labels for a minimalist look
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.iconInactive,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";
          size = 24; // Default icon size
          color = focused ? theme.colors.primary : theme.colors.iconInactive;

          switch (route.name) {
            case "Top 100":
              iconName = "star";
              break;
            case "Categories":
              iconName = "grid";
              break;
            case "Home":
              iconName = "home";
              size = 24; // Slightly bigger icon
              return (
                <View style={styles.homeIconWrapper}>
                  <View style={styles.homeIconContainer}>
                    <Icon name={iconName} size={size} style={styles.icon} />
                  </View>
                </View>
              );
            case "Most Recent":
              iconName = "clock";
              break;
            case "Search":
              iconName = "search";
              break;
            default:
              iconName = "circle";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Top 100" component={BestRating} />
      <Tab.Screen name="Categories" component={Genres} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Most Recent" component={RecentMovies} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
