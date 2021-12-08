import * as React from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    Home,
} from '@src/pages';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <></>}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                initialParams={{ icon: 'home' }}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;