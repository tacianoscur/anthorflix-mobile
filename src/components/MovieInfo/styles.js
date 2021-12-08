import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Information = styled.View`
    border-radius: 10px;
    position: relative;
    max-width: 100%;
`;

export const MovieHeader = styled.View`
    margin: 10px 0px;
    display: flex;
    flex-direction: row;
`;

export const MovieGeneralInfo = styled.View`
    width: 150px;
    margin: 0px 10px;
    position: relative;
`;

export const TitleWrapper = styled.View`
    width: 100%;
    margin-top: 5px;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${props => props.theme.black};
    font-family: ${props => props.theme.fontBold};
    font-size: 20px;
    align-items: center;
`;

export const GenresWrapper = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px 10px 5px;
`;

export const Genre = styled.Text`
    color: ${props => props.theme.black};
    font-family: ${props => props.theme.fontBold};
    font-size: 12px;
    align-items: center;
`;

export const CustomText = styled.Text`
    color: ${props => props.theme.black};
    font-family: ${props => props.theme.fontBold};
    font-size: 12px;
    align-items: center;
    margin: 5px 10px;
`;

export const AverageRatingWrapper = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px 10px 5px;
`;

export const AverageRatingText = styled.Text`
    color: ${props => props.theme.black};
    font-family: ${props => props.theme.fontBold};
    font-size: 12px;
`;

export const MovieBody = styled.View`
    margin: 10px 0px;
`;

export const OverviewWrapper = styled.View`
    width: 100%;
`;

export const Overview = styled.Text`
    color: ${props => props.theme.black};
    font-family: ${props => props.theme.fontBold};
    font-size: 12px;
`;

export const styles = StyleSheet.create({
    moviePoster: {
        width: 145,
        height: 200,
        borderRadius: 10,
    },
});