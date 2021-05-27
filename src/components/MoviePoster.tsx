/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MoviePosterProps} from '../interfaces/movieAppInterface';
import {styles} from '../themes/movieAppTheme';

export const MoviePoster = ({
  movie,
  width = 300,
  height = 440,
}: MoviePosterProps) => {
  const navigation = useNavigation();

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        width,
        height,
        marginLeft: 2,
        paddingBottom: 20,
        paddingHorizontal: 3,
      }}
      onPress={() => {
        navigation.navigate('MovieDetailScreen', movie);
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};
