import { Stack } from "expo-router";
import React from "react";

function _layout(props) {
  return (
    <Stack>
      <Stack.Screen name="modaali" options={{ presentation: "modal" }} />
    </Stack>
  );
}

export default _layout;
