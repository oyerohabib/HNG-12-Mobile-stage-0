import { StyleSheet, Linking } from "react-native";
import { View, Text, Pressable } from "react-native";

export default function HomeScreen() {
  const links = [
    {
      title: "GitHub Repository",
      url: "https://github.com/oyerohabib/HNG-12-Mobile-stage-0",
    },
    {
      title: "HNG React-Native Developers",
      url: "http://hng.tech/hire/react-native-developers",
    },
    {
      title: "Telex",
      url: "https://telex.im/",
    },
    {
      title: "Delve",
      url: "https://delve.fun/",
    },
  ];

  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {links.map((link, index) => (
        <Pressable
          key={index}
          style={({ pressed }) => [
            styles.button,
            { opacity: pressed ? 0.7 : 1 },
          ]}
          onPress={() => handlePress(link.url)}
        >
          <Text style={styles.buttonText}>{link.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 15,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "SpaceMono",
  },
});
