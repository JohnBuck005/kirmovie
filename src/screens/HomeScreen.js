import React from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import PlayButton from '../components/PlayButton';

const { width, height } = Dimensions.get('window');

const featuredMovie = {
  id: 1,
  title: 'Watch Joker',
  subtitle: 'Available Now',
  actor: 'JOAQUIN PHOENIX',
  image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop',
  rating: 8.4,
};

const popularMovies = [
  {
    id: 2,
    title: 'The Conjuring',
    rating: 7.9,
    image: 'https://images.unsplash.com/photo-1489599162914-09c5b83d1974?w=300&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Annabelle',
    rating: 7.8,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'In Bruges',
    rating: 7.6,
    image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=400&fit=crop',
  },
];

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-slate-900">
      <ImageBackground
        source={{ uri: featuredMovie.image }}
        style={{ width, height: height * 0.7 }}
        className="relative"
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.8)']}
          style={{ flex: 1 }}
        >
          <SafeAreaView className="flex-1">
            {/* Header */}
            <View className="flex-row items-center justify-between px-6 pt-4">
              <SearchBar />
              <View className="flex-row space-x-6">
                <Text className="text-white text-lg font-medium">Movies</Text>
                <Text className="text-gray-400 text-lg">TV Shows</Text>
                <Text className="text-gray-400 text-lg">Trailers</Text>
              </View>
            </View>

            {/* Featured Movie Content */}
            <View className="flex-1 justify-end px-6 pb-8">
              <BlurView
                intensity={20}
                tint="dark"
                className="rounded-2xl p-4 mb-6"
                style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
              >
                <View className="flex-row items-center mb-2">
                  <View className="w-8 h-8 bg-red-600 rounded mr-3 items-center justify-center">
                    <Text className="text-white font-bold text-lg">N</Text>
                  </View>
                  <Text className="text-gray-300 text-sm">{featuredMovie.subtitle}</Text>
                </View>
                <Text className="text-white text-3xl font-bold mb-1">
                  {featuredMovie.title}
                </Text>
                <Text className="text-gray-400 text-sm mb-4">
                  {featuredMovie.actor}
                </Text>
                
                {/* Progress Dots */}
                <View className="flex-row space-x-2 mb-4">
                  <View className="w-8 h-1 bg-white rounded-full" />
                  <View className="w-8 h-1 bg-gray-600 rounded-full" />
                  <View className="w-8 h-1 bg-gray-600 rounded-full" />
                </View>
              </BlurView>

              <PlayButton />
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>

      {/* Popular Movies Section */}
      <View className="flex-1 px-6 pt-6">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-white text-xl font-semibold">Popular Movie</Text>
          <TouchableOpacity>
            <Text className="text-gray-400 text-sm">View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row space-x-4">
            {popularMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}