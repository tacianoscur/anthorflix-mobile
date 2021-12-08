import React from "react";

import { TabBarButton } from '@src/components';
import { StyledTabBar } from './styles';

const TabBar = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <StyledTabBar>
            {state.routes.map((route, index) => {
                const { options, params } = descriptors[route.key].route;
                const label = options?.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options?.title !== undefined
                    ? options.title
                    : route.name;

                const icon = params?.icon || null;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                return (
                    <TabBarButton
                        key={index}
                        onPress={onPress}
                        isFocused={isFocused}
                        label={label}
                        icon={icon}
                    />
                );
            })}
        </StyledTabBar>
    );
};

export default TabBar;