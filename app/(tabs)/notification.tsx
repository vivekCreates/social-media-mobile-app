import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function NotificationScreen(){
    return(
        <SafeAreaProvider>
            <Text>Notification screen</Text>
        </SafeAreaProvider>
    )
}