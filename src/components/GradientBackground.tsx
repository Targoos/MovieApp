import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
import {useFade} from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  const {colors, previousColors, savePreviousColors} = useContext(
    GradientContext,
  );

  const {opacity, fadeIn, fadeOut} = useFade();

  useEffect(() => {
    fadeIn(() => {
      savePreviousColors(colors);
    });
    fadeOut(0);
  }, [colors]);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[previousColors.primary, previousColors.secondary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.7, y: 0.8}}
      />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
        }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.7, y: 0.8}}
        />
      </Animated.View>
      {children}
    </View>
  );
};
