import { StatusBar, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import { ArrowLeftIcon } from '@src/assets/svg';

export const StyledLayout = styled.View`
  height: 100%;
  color: ${(props) => props.theme.black};
  padding-top: ${StatusBar?.currentHeight || '20'}px;
  padding-bottom: 20px;
`;

export const Header = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  z-index: 10;
  padding-top: ${Platform.OS === 'android' ? StatusBar?.currentHeight : 20}px;
  padding-left: ${(props) => (props.hasBackArrow ? 0 : 30)}px;
`;

export const Wrapper = styled.View`
  flex: 0 0 auto;
  background-color: ${(props) => props.theme.primary};
`;

export const FlexView = styled.View`
  flex: 1;
`;

export const BackButton = styled.TouchableOpacity`
  align-items: center;
  padding: 20px;
`;

export const StyledBackBt = styled.View``;

export const StyledBackBtIcon = styled(ArrowLeftIcon)`
  width: 24px;
`;

export const styles = StyleSheet.create({
  keyboardStyle: {
    flex: 1,
  },
});
