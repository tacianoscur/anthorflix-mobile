import React, { useEffect } from 'react';
import Routes from './routes';

import { ThemeProvider } from 'styled-components/native';
import theme from 'src/theme';

import { View, Text, StatusBar } from 'react-native';

const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <StatusBar barStyle="light-content" backgroundColor={theme.primary} />
            <Routes />
        </ThemeProvider>
        
    );
};

export default App;