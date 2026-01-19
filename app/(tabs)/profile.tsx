import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ProfileScreen(){
    return (
        <SafeAreaProvider>
            <Text>Profile screen</Text>
        </SafeAreaProvider>
    )
}