import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, useWindowDimensions, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMovies} from '../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {MoviePoster} from '../components/MoviePoster';
import {GradientBackground} from '../components/GradientBackground';
import {getImageColors} from '../helpers/index';
import {GradientContext} from '../context/GradientContext';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {width} = useWindowDimensions();

  const {colors, saveColors} = useContext(GradientContext);

  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();

  const getPosterColors = async index => {
    const movie = nowPlaying[index];

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const {primary, secondary} = await getImageColors(uri);
    saveColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <ActivityIndicator
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        color="red"
        size={100}
      />
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 15}}>
          <View style={{height: 460}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={width}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
