import React from "react";
import { StyleSheet, View, ScrollView, Linking, StatusBar } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  Button,
  Provider as PaperProvider,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const links = [
  {
    title: "HNG React Native Developers",
    url: "http://hng.tech/hire/react-native-developers",
    description: "Hire skilled React Native developers from HNG.",
    icon: "react",
  },
  {
    title: "Telex",
    url: "https://telex.im",
    description: "Real-time notifications for database monitoring.",
    icon: "bell-ring",
  },
  {
    title: "Delve",
    url: "https://delve.fun",
    description: "Explore and discover new possibilities.",
    icon: "compass",
  },
];

export default function App() {
  const handleLinkPress = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        console.log(`Cannot open URL: ${url}`);
      }
    } catch (error) {
      console.error(`Error opening URL: ${error}`);
    }
  };

  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Title style={styles.headerTitle}>HNG Stage 0</Title>
          <Paragraph style={styles.headerSubtitle}>Mobile Task</Paragraph>
        </View>

        <View style={styles.cardsContainer}>
          {links.map((link, index) => (
            <Card key={index} style={styles.card}>
              <Card.Content>
                <View style={styles.iconContainer}>
                  <MaterialCommunityIcons
                    name={link.icon}
                    size={32}
                    color="#6200ee"
                  />
                </View>
                <Title style={styles.cardTitle}>{link.title}</Title>
                <Paragraph style={styles.cardDescription}>
                  {link.description}
                </Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button
                  mode="contained"
                  onPress={() => handleLinkPress(link.url)}
                  style={styles.button}
                >
                  Visit Link
                </Button>
              </Card.Actions>
            </Card>
          ))}
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  cardsContainer: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 4,
    borderRadius: 12,
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 8,
  },
  cardDescription: {
    textAlign: "center",
    color: "#666",
    marginBottom: 8,
  },
  button: {
    width: "100%",
    marginTop: 8,
  },
});
