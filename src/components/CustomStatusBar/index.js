import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import { ThemeContext } from 'styled-components/native';

const CustomStatusBar = () => {
  const theme = useContext(ThemeContext);

  return <StatusBar translucent barStyle={'dark-content'} backgroundColor={theme.white} />;
};

export default CustomStatusBar;
