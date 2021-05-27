import React from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {HorizontalSliderProps} from '../interfaces/movieAppInterface';
import {styles} from '../themes/movieAppTheme';
import {MoviePoster} from './MoviePoster';

export const HorizontalSlider = ({title, movies}: HorizontalSliderProps) => {
  return (
    <View style={{height: title ? 250 : 220}}>
      {title && <Text style={styles.title}>{title}</Text>}

      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={210} />
        )}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};
