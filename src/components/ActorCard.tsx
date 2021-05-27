import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ActorCardProps} from '../interfaces/movieAppInterface';

export const ActorCard = ({actor}: ActorCardProps) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{uri}}
          style={{width: 50, height: 50, borderRadius: 10}}
        />
      )}
      <View style={styles.actorInfo}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{fontSize: 16, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 8,
    marginRight: 15,
    paddingRight: 10,
    height: 50,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 2,
  },
});
