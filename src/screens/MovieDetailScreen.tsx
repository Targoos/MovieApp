import React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';
import {styles} from '../themes/movieAppTheme';
import {ScrollView} from 'react-native-gesture-handler';
import {useMoviesDetails} from '../hooks/useMoviesDetails';
import {MovieDetails} from '../components/MovieDetails';
import {GradientBackground} from '../components/GradientBackground';

interface MovieDetailProps
  extends StackScreenProps<RootStackParams, 'MovieDetailScreen'> {}

export const MovieDetailScreen = ({route}: MovieDetailProps) => {
  const {height: screenHeight} = useWindowDimensions();

  const movie = route.params;

  const {isLoading, movieFull, cast} = useMoviesDetails(movie.id);

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <ScrollView>
      <GradientBackground>
        <View
          style={{
            ...styles.imageContainer,
            alignSelf: 'center',
            flex: 0,
            width: 400,
            margin: 5,
            height: screenHeight * 0.8,
          }}>
          <Image source={{uri}} style={{...styles.image, borderRadius: 0}} />
        </View>
        <View style={{marginHorizontal: 20, marginVertical: 10}}>
          <Text style={styles.subTitle}>{movie.title}</Text>
          <Text style={{...styles.title, marginLeft: 0}}>
            {movie.original_title}
          </Text>
        </View>
        {isLoading ? (
          <ActivityIndicator size={35} color="grey" style={{marginTop: 20}} />
        ) : (
          <MovieDetails movieFull={movieFull!} cast={cast} />
        )}
      </GradientBackground>
    </ScrollView>
  );
};
