import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const CardStyled = styled.TouchableOpacity`
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 10px;
    margin: 16px 0px;
    position: relative;
    max-width: 100%;
`;

export const CardWrapper = styled.View`
    height: 360px;
    border-radius: 10px;
    overflow: hidden;
`;

export const CardDataWrapper = styled.View`
    top: 250px;
    height: 110px;
    background-color: #000;
    opacity: .8;
    overflow: hidden;
    padding: 0px 15px;
`;

export const TitleWrapper = styled.View`
    width: 100%;
    margin-top: 10px;
    align-items: center;
`;

export const Title = styled.Text`
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.fontBold};
    font-size: 20px;
    text-align: center;
`;

export const GenresWrapper = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 10px 15px;
`;

export const Genre = styled.Text`
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.fontBold};
    font-size: 12px;
    align-items: center;
`;

export const styles = StyleSheet.create({
    backgroundImage: {
      height: '100%',
      width: '100%',
    }
});