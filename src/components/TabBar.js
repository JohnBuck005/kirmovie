import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const tabIcons = {
  Home: 'home',
  Search: 'search',
  Favorites: 'heart',
  Profile: 'person',
};

export default function TabBar({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <BlurView
      intensity={80}
      tint="dark"
      className="absolute bottom-0 left-0 right-0"
      style={{
        paddingBottom: insets.bottom,
        backgroundColor: 'rgba(0,0,0,0.3)',
      }}
    >
      <View className="flex-row justify-around items-center py-4 px-6">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          if (route.name === 'Home' && isFocused) {
            return (
              <TouchableOpacity
                key={route.name}
                onPress={onPress}
                className="bg-red-500 rounded-full px-6 py-3 flex-row items-center"
                style={{
                  shadowColor: '#ef4444',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.3,
                  shadowRadius: 8,
                  elevation: 6,
                }}
              >
                <Ionicons
                  name={tabIcons[route.name]}
                  size={20}
                  color="white"
                />
                <Text className="text-white font-medium ml-2">Home</Text>
              </TouchableOpacity>
            );
          }

          return (
            <TouchableOpacity
              key={route.name}
              onPress={onPress}
              className="p-3"
            >
              <BlurView
                intensity={20}
                tint="light"
                className="rounded-full p-2"
                style={{
                  backgroundColor: isFocused
                    ? 'rgba(255,255,255,0.2)'
                    : 'rgba(255,255,255,0.1)',
                }}
              >
                <Ionicons
                  name={tabIcons[route.name]}
                  size={20}
                  color={isFocused ? 'white' : '#9CA3AF'}
                />
              </BlurView>
            </TouchableOpacity>
          );
        })}
      </View>
    </BlurView>
  );
}