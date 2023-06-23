import { Stack } from 'expo-router';
import React from 'react';

function AppLayout(props) {
  return (
    <Stack>
      <Stack.Screen name="modaali" options={{ presentation: 'modal' }} />
      <Stack.Screen name="kissa" options={{ presentation: 'card' }} />
    </Stack>
  );
}

export default AppLayout;
