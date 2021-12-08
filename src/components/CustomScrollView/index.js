import React from 'react';

import { StyledContent, StyledScrollView } from './styles';

const CustomScrollView = ({ children, scrollRef, ...props }) => {
  return (
    <StyledContent>
      <StyledScrollView
        fadingEdgeLength={200}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        ref={scrollRef}
        {...props}>
        {children}
      </StyledScrollView>
    </StyledContent>
  );
};

export default CustomScrollView;
