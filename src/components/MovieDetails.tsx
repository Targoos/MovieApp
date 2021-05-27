import React from 'react';
import {Text, View} from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import {ActorCard} from './ActorCard';
import {MovieDetailProps} from '../interfaces/movieAppInterface';
import {styles} from '../themes/movieAppTheme';
import {FlatList} from 'react-native-gesture-handler';

export const MovieDetails = ({movieFull, cast}: MovieDetailProps) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text style={{marginLeft: 5, fontWeight: 'bold'}}>
            {movieFull.vote_average}
          </Text>
          <Text style={{marginLeft: 5}}>
            {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>
        <Text
          style={{...styles.title, marginLeft: 0, fontSize: 25, marginTop: 10}}>
          Historia
        </Text>
        <Text style={{fontSize: 16, marginTop: 10}}>{movieFull.overview}</Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <Text style={{...styles.title, marginLeft: 0}}>Presupuesto</Text>
          <Text style={{marginLeft: 10, fontSize: 18}}>
            {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
          </Text>
        </View>
      </View>
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text style={{...styles.title, marginLeft: 20}}>Actores</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ActorCard actor={item} />}
          style={{marginTop: 10, height: 70, marginLeft: 20}}
        />
      </View>
    </>
  );
};
