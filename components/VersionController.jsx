// ./components/VersionController.jsx
import React, { useEffect, useState } from "react";
import { View, Text, Linking } from "react-native";
import Constants from "expo-constants";
import semver from "semver";
import useLatestVersion from "../firebase/useLatestVersion";
import { useTheme } from "../styles/ThemeContext";

const VersionController = () => {
  const theme = useTheme();
  const currentVersion = Constants.expoConfig.version;
  const { latestVersion, loading, error } = useLatestVersion();
  const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);

  useEffect(() => {
    if (!loading && latestVersion) {
      const latestVersionNumber = latestVersion.version_number;

      if (semver.lt(currentVersion, latestVersionNumber)) {
        setIsUpdateAvailable(true);
      }
    }
  }, [loading, latestVersion]);

  if (loading) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  if (!isUpdateAvailable) {
    return null;
  }

  return (
    <View
      style={{
        padding: 10,
        marginTop: 2,
        backgroundColor: theme.colors.card,
        alignItems: "center", // Centers the content horizontally
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: theme.colors.text,
          textAlign: "center", // Centers the text within the Text component
        }}
      >
        Versão {latestVersion.name} disponível{" "}
        <Text
          style={{
            color: theme.colors.primary,
            textDecorationLine: "underline",
            fontWeight: "bold",
          }}
          onPress={() => Linking.openURL(latestVersion.download_link)}
        >
          Atualizar Agora
        </Text>
      </Text>
    </View>
  );
};

export default VersionController;
