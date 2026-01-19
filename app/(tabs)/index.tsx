import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView >
      <View className="p-10 ">
      <Text className="text-3xl text-white font-semibold">SeeMe</Text>
      <Text>Home screen</Text>
      </View>
    </SafeAreaView>
  )
}