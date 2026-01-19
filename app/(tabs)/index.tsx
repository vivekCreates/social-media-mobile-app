import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
<SafeAreaProvider>
  <Text>Home screen</Text>
</SafeAreaProvider>
  )
}