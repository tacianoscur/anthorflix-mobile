import React from 'react';
import {SafeAreaView} from 'react-native';
import { CustomStatusBar } from '@src/components';

import { styles } from './styles';

const SafeArea = ({ children }) => {
  return (
    <>
      <CustomStatusBar />
      <SafeAreaView style={styles.safeAreaView}>{children}</SafeAreaView>
    </>
  );
};

export default SafeArea;
