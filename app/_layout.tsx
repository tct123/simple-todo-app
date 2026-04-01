import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ title: "Your To Do", headerLargeTitleEnabled: true }} />;
}
