import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#1a1a2e',
        headerTitleStyle: {
          fontWeight: '600',
        },
        contentStyle: {
          backgroundColor: '#f8fafc',
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: 'Dashed View',
          headerTitleAlign: 'center', 
        }}
      />
    </Stack>
  );
}
