import React, { useContext } from "react";
import { ThemeContext } from 'styled-components/native';

const TabIcon = ({ icon }) => {
    const theme = useContext(ThemeContext);

    const params = {
        fill: theme.primary,
        width: 22,
    };

    switch (icon) {
        case "home":
            return (<></>);
        default:
            return null;
    }
};

export default TabIcon;