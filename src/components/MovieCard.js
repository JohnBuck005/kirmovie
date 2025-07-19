import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

export default function MovieCard({ movie }) {
  return (
    <TouchableOpacity className="relative">
      <ImageBackground
        source={{ uri: movie.image }}
        className="w-32 h-48 rounded-2xl overflow-hidden"
        style={{
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.3,
          shadowRadius: 12,
          elevation: 8,
        }}
      >
        {/* Rating Badge */}
        <BlurView
          intensity={30}
          tint="dark"
          className="absolute top-3 left-3 rounded-full px-2 py-1"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
        >
          <View className="flex-row items-center">
            <Ionicons name="star" size={12} color="#FFD700" />
            <Text className="text-white text-xs font-medium ml-1">
              {movie.rating}
            </Text>
          </View>
        </BlurView>

        {/* Favorite Button */}
        <TouchableOpacity className="absolute top-3 right-3">
          <BlurView
            intensity={30}
            tint="dark"
            className="rounded-full p-2"
            style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
          >
            <Ionicons name="heart-outline" size={16} color="white" />
          </BlurView>
        </TouchableOpacity>
      </ImageBackground>
    </TouchableOpacity>
  );
}