import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

function Index(props) {
  return (
    <View style={{ marginTop: 50 }}>
      <Text>Moi</Text>
      <Link href="/(login)/login">Kirjaudu sisään</Link>
      <Link href="/modaali">Modaali sisään</Link>
      <Link href="/kissa">Katti</Link>
    </View>
  );
}

export default Index;
