import React from "react";
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import { useTheme } from "../styles/ThemeContext";

const TermsOfService = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.heading}>Terms of Service</Text>
        <Text style={styles.lastUpdated}>Last Updated: 13 October 2024</Text>

        <Text style={styles.paragraph}>
          Welcome to <Text style={styles.bold}>LeviathanPlay</Text>! By
          downloading, accessing, or using the{" "}
          <Text style={styles.bold}>LeviathanPlay</Text> mobile application (the
          "App"), you agree to be bound by these Terms of Service ("ToS"). If
          you do not agree to these terms, please do not use LeviathanPlay.
        </Text>

        <Text style={styles.sectionTitle}>
          1. Disclaimer Regarding Movie Content
        </Text>
        <Text style={styles.paragraph}>
          LeviathanPlay provides links to third-party websites or content
          ("External Sites") that host movies or video content.{" "}
          <Text style={styles.bold}>LeviathanPlay</Text> does not host, upload,
          or store any video files or movie content on its own servers. We are
          not responsible for the availability, legality, or accuracy of the
          content provided by these External Sites.
        </Text>

        <Text style={styles.subsectionTitle}>
          No Responsibility for Copyright Violations
        </Text>
        <Text style={styles.paragraph}>
          LeviathanPlay only provides links to movies hosted on third-party
          websites, and we do not claim ownership or control over these movies.{" "}
          <Text style={styles.bold}>LeviathanPlay</Text> takes no responsibility
          for any claims of piracy, copyright infringement, or unauthorized
          distribution of content that may arise from accessing these
          third-party links. If you have a complaint about a movie or video, you
          should direct your concerns to the website hosting the content.
        </Text>

        <Text style={styles.subsectionTitle}>External Links</Text>
        <Text style={styles.paragraph}>
          The inclusion of links to any External Sites does not imply
          endorsement by <Text style={styles.bold}>LeviathanPlay</Text>. We are
          not responsible for the practices or content of these websites. Your
          interaction with these External Sites is solely at your own risk, and{" "}
          <Text style={styles.bold}>LeviathanPlay</Text> disclaims all
          responsibility for any harm or loss that may result from your use of
          or reliance on External Sites.
        </Text>

        <Text style={styles.sectionTitle}>
          2. No User Data Collection (Currently)
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>LeviathanPlay</Text> is committed to
          respecting your privacy. At present, we do not collect, store, or
          share any personal information about users of LeviathanPlay. This
          includes, but is not limited to:
        </Text>
        <Text style={styles.listItem}>
          • Personal identifiers (name, email, phone number, address, etc.)
        </Text>
        <Text style={styles.listItem}>
          • Usage data (IP address, device information, browsing history, etc.)
        </Text>
        <Text style={styles.paragraph}>
          In the future, we may introduce features like movie recommendations,
          favorite movies, and watch later lists. If we do collect any data to
          enhance these features, it will be completely anonymous and designed
          to protect your privacy.
        </Text>
        <Text style={styles.sectionTitle}>3. No Permissions Required</Text>
        <Text style={styles.paragraph}>
          LeviathanPlay does not require any special permissions from your
          device to function. You do not need to grant access to your contacts,
          camera, microphone, storage, or any other sensitive data to use
          LeviathanPlay. The app is designed to provide its functionality
          without needing access to any part of your device's personal data or
          system features. This is why the project is open source, so you can
          verify for yourself that no private information is being collected.
          Feel free to explore the code at:
          github.com/rafawastaken/LeviathanPlay
        </Text>

        <Text style={styles.sectionTitle}>4. Limitation of Liability</Text>
        <Text style={styles.paragraph}>
          To the fullest extent permitted by law,{" "}
          <Text style={styles.bold}>LeviathanPlay</Text> disclaims all
          warranties, express or implied, in connection with LeviathanPlay and
          your use of it. LeviathanPlay is provided "as is," and we make no
          guarantees regarding the reliability, accuracy, or availability of
          LeviathanPlay or its content.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>LeviathanPlay</Text> shall not be held
          liable for any damages, including but not limited to direct, indirect,
          incidental, consequential, or punitive damages arising out of your use
          of or inability to use LeviathanPlay, even if we have been advised of
          the possibility of such damages.
        </Text>

        <Text style={styles.sectionTitle}>5. Intellectual Property</Text>
        <Text style={styles.paragraph}>
          LeviathanPlay and its original content, features, and functionality
          are and will remain the exclusive property of{" "}
          <Text style={styles.bold}>LeviathanPlay</Text> and its licensors. The
          App is protected by copyright, trademark, and other laws of both the
          country in which it operates and foreign countries.
        </Text>
        <Text style={styles.paragraph}>
          You may not reproduce, distribute, or create derivative works from any
          part of LeviathanPlay without the prior written consent of{" "}
          <Text style={styles.bold}>LeviathanPlay</Text>.
        </Text>

        <Text style={styles.sectionTitle}>6. Changes to the ToS</Text>
        <Text style={styles.paragraph}>
          We reserve the right to update or modify these ToS at any time without
          prior notice. Any changes to these terms will be effective immediately
          upon posting on this page. Your continued use of LeviathanPlay after
          the changes have been made will constitute your acceptance of the
          revised terms.
        </Text>

        <Text style={styles.sectionTitle}>7. Governing Law</Text>
        <Text style={styles.paragraph}>
          These ToS and any disputes arising out of or relating to your use of
          LeviathanPlay will be governed by and construed in accordance with the
          laws of **[Your Country]**, without regard to its conflict of law
          principles.
        </Text>

        <Text style={styles.sectionTitle}>8. Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have any questions or concerns regarding these ToS, feel free
          to contact us at:
        </Text>

        <Text style={styles.lastParagraph}>Made with ❤️ by Rafawastaken</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyles = (theme) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingBottom: 20,
      paddingHorizontal: 10,
    },
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingHorizontal: 20,
      // Removed paddingTop and paddingBottom from here
    },
    contentContainer: {
      paddingTop: 20,
      paddingBottom: 20, // Adjust as needed
    },
    heading: {
      fontSize: 24,
      color: theme.colors.text,
      fontWeight: "bold",
      marginBottom: 10,
      textAlign: "center",
    },
    lastUpdated: {
      fontSize: 14,
      color: theme.colors.secondaryText,
      marginBottom: 20,
      textAlign: "center",
    },
    sectionTitle: {
      fontSize: 18,
      color: theme.colors.text,
      fontWeight: "bold",
      marginTop: 20,
      marginBottom: 10,
    },
    subsectionTitle: {
      fontSize: 16,
      color: theme.colors.text,
      fontWeight: "600",
      marginTop: 15,
      marginBottom: 5,
    },
    paragraph: {
      fontSize: 14,
      color: theme.colors.text,
      marginBottom: 10,
      lineHeight: 20,
    },
    listItem: {
      fontSize: 14,
      color: theme.colors.text,
      marginLeft: 20,
      marginBottom: 5,
      lineHeight: 20,
    },
    bold: {
      fontWeight: "bold",
    },
    lastParagraph: {
      fontSize: 14,
      color: theme.colors.text,
      //   marginBottom: 10,
      lineHeight: 20,
      marginTop: 20,
      textAlign: "center",
    },
  });

export default TermsOfService;
