import React, { useContext } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { CustomStatusBar, SafeArea } from '@src/components';
import { ThemeContext } from 'styled-components/native';

import {
  BackButton,
  FlexView,
  Header,
  StyledBackBt,
  StyledBackBtIcon,
  StyledLayout,
  Wrapper,
  styles,
} from './styles';

const Layout = ({ children, backHandler }) => {
  const theme = useContext(ThemeContext);

  function renderChildren() {
    return (
      <StyledLayout theme={theme}>
        <Header hasBackArrow={!!backHandler}>
        {!!backHandler && (
            <BackButton onPress={backHandler}>
              <StyledBackBt>
                <StyledBackBtIcon height={16} fill={theme.darkGrey} />
              </StyledBackBt>
            </BackButton>
          )}
        </Header>
        {children}
      </StyledLayout>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardStyle}>
        <CustomStatusBar />
        <SafeArea>
          <Wrapper>
            {renderChildren()}
            <FlexView />
          </Wrapper>
        </SafeArea>
    </KeyboardAvoidingView>
  );
};

export default Layout;
