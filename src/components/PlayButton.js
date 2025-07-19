import React from 'react';
import { TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

export default function PlayButton() {
  return (
    <TouchableOpacity className="self-end">
      <BlurView
        intensity={40}
        tint="light"
        className="rounded-full p-4"
        style={{
          backgroundColor: 'rgba(239, 68, 68, 0.8)',
          shadowColor: '#ef4444',
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.4,
          shadowRadius: 16,
          elevation: 12,
        }}
      >
        <Ionicons name="play" size={24} color="white" />
      </BlurView>
    </TouchableOpacity>
  );
}