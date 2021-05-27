import React, {createContext, useState} from 'react';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  previousColors: ImageColors;
  saveColors: (obtainedColors: ImageColors) => void;
  savePreviousColors: (obtainedColors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [previousColors, setPreviousColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const saveColors = (obtainedColors: ImageColors) => {
    setColors(obtainedColors);
  };

  const savePreviousColors = (obtainedColors: ImageColors) => {
    setPreviousColors(obtainedColors);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        previousColors,
        saveColors,
        savePreviousColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
