import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import {FadeScreen} from './src/screens/FadeScreen';
import {GradientProvider} from './src/context/GradientContext';

const AppState = ({children}: any) => {
  return <GradientProvider>{children}</GradientProvider>;
};

export const MovieApp = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
        {/* <FadeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};
