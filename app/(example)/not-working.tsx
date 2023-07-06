import { Stack } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import Animated, { Layout } from "react-native-reanimated";

export default function NotWorking() {
  const [collapse, setCollapse] = useState(false);
  const [useBackground, setBackground] = useState(true);

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Stack.Screen
        options={{
          headerBackground: useBackground
            ? () => (
                <View
                  style={{
                    flex: 1,
                    height: "100%",
                    backgroundColor: "#edf6ff",
                  }}
                />
              )
            : undefined,
        }}
      />
      <Animated.View
        layout={Layout.springify()}
        style={{
          paddingVertical: collapse ? 60 : 120,
        }}
      >
        <Animated.View layout={Layout.springify()}>
          <Text style={{ fontSize: 60, fontWeight: "700" }}>Example</Text>
        </Animated.View>
      </Animated.View>
      <Animated.View layout={Layout.springify()}>
        <Button title="Toggle" onPress={() => setCollapse((prev) => !prev)} />
      </Animated.View>
      <Animated.View layout={Layout.springify()}>
        <View
          style={{
            padding: 24,
          }}
        >
          <Text style={{ textAlign: "center", marginBottom: 16 }}>
            This example uses the `expo-router`'s `Stack.Screen` and uses the
            `headerBackground` prop.
          </Text>
        </View>
      </Animated.View>
    </View>
  );
}
