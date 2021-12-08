import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const CommentCard = styled.View`
    border-top-color: ${props => props.theme.lightGrey};
    border-top-width: .5px;
    max-width: 100%;
    padding: 10px;
`;

export const UserNameText = styled.Text`
    color: ${props => props.theme.darkText};
    font-family: ${props => props.theme.fontBold};
    font-size: 12px;
`;

export const DescriptionText = styled.Text`
    color: ${props => props.theme.darkGrey};
    font-family: ${props => props.theme.fontBold};
    font-size: 12px;
`;