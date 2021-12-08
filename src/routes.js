import React, { useContext } from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from '@src/services';

import {
    Movie,
} from './pages';

import {
    BottomTabs
} from "./components";

const Stack = createStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                <>
                    <Stack.Screen
                        name="Landing"
                        component={BottomTabs}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="Movie"
                        component={Movie}
                        options={{
                            headerShown: false,
                        }}
                    />
                </>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;