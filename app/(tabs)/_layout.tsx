import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "HNG Stage 0",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
