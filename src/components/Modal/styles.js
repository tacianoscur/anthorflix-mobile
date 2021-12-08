import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const ContentWrapper = styled.View`
    padding: ${(props) => (props.noPaddingContent ? '0' : '0 40px')};
    padding-bottom: ${(props) => (props.bottomPadding ? '50px' : '0')};
    width: 100%;
`;

export const TitleStyled = styled.Text`
    font-size: 22px;
    font-family: ${(props) => props.theme.fontBold};
    color: ${(props) => props.theme.black};
    text-align: center;
    margin-top: ${(props) => (props.icon ? 20 : 0)}px;
`;

export const TextStyled = styled.Text`
    font-size: 16px;
    font-family: ${(props) => props.theme.fontRegular};
    color: ${(props) => props.theme.darkGrey};
    line-height: 21px;
    margin-top: 12px;
    margin-bottom: 6px;
    text-align: center;
`;

export const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: '100%',
        height: '100%',
        top: 160,
        backgroundColor: "#fff",
        borderRadius: 20,
        borderTopWidth: 1,
        borderTopColor: '#fff',
        paddingTop: 40,
        paddingBottom: 35,
        alignItems: 'center',
    },
});