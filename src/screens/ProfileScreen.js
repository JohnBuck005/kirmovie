import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-900">
      <View className="flex-1 justify-center items-center">
        <Text className="text-white text-xl">Profile Screen</Text>
      </View>
    </SafeAreaView>
  );
}