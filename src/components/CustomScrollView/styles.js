import styled from 'styled-components/native';
import { ScrollView, StyleSheet } from 'react-native';

export const StyledScrollView = styled(ScrollView).attrs((props) => ({
  contentContainerStyle: {
    flexGrow: 1,
    ...StyleSheet.flatten(props.contentContainerStyle),
  },
}))`
  flex: 1;
`;

export const StyledContent = styled.View`
  flex: 1;
`;
