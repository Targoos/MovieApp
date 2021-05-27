import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {MovieDetailScreen} from '../screens/MovieDetailScreen';
import {Movie} from '../interfaces/movieAppInterface';

export type RootStackParams = {
  HomeScreen: undefined;
  MovieDetailScreen: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="MovieDetailScreen"
        options={{cardStyle: {backgroundColor: '#ddfdfe'}}}
        component={MovieDetailScreen}
      />
    </Stack.Navigator>
  );
};
