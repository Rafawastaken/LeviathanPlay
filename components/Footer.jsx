// ./components/Footer.jsx
import React from "react";
import { Text, TouchableOpacity, View, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../styles/ThemeContext";
import createStyles from "../styles/Footer.styles";
import Constants from "expo-constants";

const Footer = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const styles = createStyles(theme);

  const version = Constants.expoConfig.version_name;

  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>
        Made with ❤️ by Rafawastaken -{" "}
        <Text
          style={styles.versionColor}
          onPress={() =>
            Linking.openURL("https://en.wikipedia.org/wiki/Chimera_(mythology)")
          }
        >
          {version}
        </Text>
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("TermsOfService")}>
        <Text style={{ color: "white" }}>Terms of Service</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
