import styled from 'styled-components/native';

export const ListMovies = styled.View`
    height: 100%;
    flex: 1;
    margin: 0px 28px 14px;
`;

export const HeaderStyled = styled.View`
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    padding-top: 10px;
    margin: 14px 28px 0px;
`;

export const StyledLogo = styled.Text`
    font-family: ${props => props.theme.fontBold};
    color: ${props => props.theme.black};
    font-size: 26px;
`;