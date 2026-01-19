import { Text, View } from "react-native";
import "../../global.css"
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function SearchScreen() {
  return <SafeAreaProvider>
    <Text className="text-4xl text-red-500">Search</Text>
  </SafeAreaProvider>
}