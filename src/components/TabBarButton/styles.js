import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity`
  height: 82px;
  font-size: 12px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: relative;
  padding: 16px 0 22px;
`;

export const StyledDetail = styled.View`
  width: 100%;
  height: 3px;
  background-color: ${(props) =>
    props.isFocused ? props.theme.primary : 'transparent'};
  position: absolute;
  left: 0;
  top: 0;
`;

export const StyledText = styled.Text`
  color: ${(props) => props.theme.grey};
  font-size: 12px;
  margin-top: auto;
  text-align: center;
`;
