import React from 'react';
import { TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <TouchableOpacity>
      <BlurView
        intensity={30}
        tint="dark"
        className="rounded-full p-3"
        style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
      >
        <Ionicons name="search" size={20} color="white" />
      </BlurView>
    </TouchableOpacity>
  );
}