// ./hooks/useNotifications.js
import { useEffect, useState } from "react";
import messaging from "@react-native-firebase/messaging";
import { Alert, Platform } from "react-native";
import { PermissionsAndroid } from "react-native";

const useNotifications = () => {
  const [notification, setNotification] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Request permission on Android explicitly (iOS permissions are handled via Firebase)
    const requestNotificationPermission = async () => {
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        const authStatus = await messaging().requestPermission();
        return (
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL
        );
      }
    };

    const getFCMToken = async () => {
      try {
        // Requesting permission for notifications
        const permissionGranted = await requestNotificationPermission();

        if (!permissionGranted) {
          throw new Error("Notification permission denied");
        }

        // Get the FCM token (Device Token)
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
          setToken(fcmToken);
          console.log("FCM Token:", fcmToken);
        } else {
          throw new Error("Failed to get FCM token");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    // Function to listen for foreground messages
    const onMessageListener = messaging().onMessage(async (remoteMessage) => {
      console.log("A new foreground FCM message arrived!", remoteMessage);
      Alert.alert("New Notification!", remoteMessage.notification?.title, [
        {
          text: "OK",
          onPress: () => console.log("Notification OK pressed"),
        },
      ]);
      setNotification(remoteMessage);
    });

    // Fetch the FCM token and set up the listener
    getFCMToken();

    // Clean up the listener when the component unmounts
    return () => {
      onMessageListener();
    };
  }, []);

  return { token, notification, error };
};

export default useNotifications;
