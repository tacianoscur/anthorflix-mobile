import React from 'react';

import { StyledButton, StyledText, StyledDetail } from './styles';

const TabBarButton = ({
  onPress,
  isFocused,
  label,
  icon,
}) => {
  return (
    <StyledButton onPress={onPress}>
      <StyledDetail isFocused={isFocused} />
      <StyledText>{label}</StyledText>
    </StyledButton>
  );
};

export default TabBarButton;
