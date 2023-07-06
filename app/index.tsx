import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Home page</Text>

      <Link href="/working" asChild>
        <Button title="Working example" />
      </Link>
      <Link href="/not-working" asChild>
        <Button title="Not Working example" />
      </Link>
    </View>
  );
}
