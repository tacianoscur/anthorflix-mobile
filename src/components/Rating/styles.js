import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const RatingCard = styled.View`
    border-radius: 10px;
    background-color: ${props => props.theme.lightBackground};
    position: relative;
    max-width: 100%;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0px;
`;

export const RatingHeader = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap = wrap;
    margin: 5px 0px;
`;

export const UserNameText = styled.Text`
    color: ${props => props.theme.darkGrey};
    font-family: ${props => props.theme.fontBold};
    font-size: 14px;
`;

export const DateText = styled.Text`
    color: ${props => props.theme.darkGrey};
    font-family: ${props => props.theme.fontBold};
    font-size: 14px;
`;