import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity`
    width: 100%;
    height: ${(props) => (props.big ? 116 : 80)}px;
    border-radius: 10px;
    overflow: hidden;
    align-items: stretch;
    margin-top: 15px;
    border: ${(props) => props.border ? '2px solid rgba(46, 92, 255, 0.15)' : 'none'};
`;

StyledButton.Button = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${(props) => {
        if (props.clean) {
        return 'transparent';
        }
        return props.color || props.theme.lightBackground;
    }};
    text-align: center;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

StyledButton.Info = styled.View`
   padding: 15px 24px;
   flex-direction: row;
   align-items: center;
`;

StyledButton.Icon = styled.View`
    margin-right: 24px;
`;

StyledButton.Title = styled.Text`
    text-align: ${(props) => props.big || !props.textCenter ? 'left' : 'center'};
    flex-grow: ${(props) => (props.clean || props.textCenter ? 1 : 0)};
    font-family: ${(props) => props.theme.fontBold};
    font-size: ${(props) => (props.big ? 25 : 18)}px;
    color: ${(props) => {
        if (props.textColor) {
            return props.textColor;
        }

        return props.clean ? props.theme.green : props.theme.white;
    }};
`;

