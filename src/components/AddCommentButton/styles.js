import styled from 'styled-components/native';

export const AddCommentCard = styled.View`
    position: relative;
    max-width: 100%;
    padding: 5px;
    margin: 5px 0px;
    display: flex;
    flex-direction: row;
`;

export const CommentInput = styled.View`
    flex-direction: row;
    justify-content: center;
    border-width: 2px;
    border-radius: 5px;
    width: 75%;
    border-color: ${(props) => {
    if (props.hasError) {
        return props.theme.error;
    }
    return props.isFocused ? props.theme.black : props.theme.grey;
    }};
`;

CommentInput.Input = styled.TextInput`
    height: 35px;
    font-family: ${(props) => props.theme.fontSemiBold};
    font-size: 12px;
    flex: 1;
    background-color: ${(props) => props.editable === false ? props.theme.lightGreyBorder : props.theme.white};
    border-radius: 5px;
    color: ${(props) => {
        if (props.hasError) {
            return props.theme.error;
        }
            return props.isFocused ? props.theme.text : props.theme.darkGrey;
    }};
    padding: 0px 5px;
`;

export const StyledButton = styled.TouchableOpacity`
    width: 20%;
    height: 35px;
    border-radius: 10px;
    overflow: hidden;
    align-items: stretch;
    margin-left: 5%;
    border: ${(props) => props.border ? '2px solid rgba(46, 92, 255, 0.15)' : 'none'};
`;

StyledButton.Button = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.green};
    text-align: center;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

StyledButton.Title = styled.Text`
    text-align: center;
    flex-grow: 1;
    font-family: ${(props) => props.theme.fontBold};
    font-size: 12px;
    color: ${(props) => {
        if (props.textColor) {
            return props.textColor;
        }

        return props.clean ? props.theme.green : props.theme.white;
    }};
`;