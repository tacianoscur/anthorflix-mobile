import React from "react";

import {
    StyledButton,
} from './styles';

const Button = (props) => {

    const renderChildren = () => (
        <>
          <StyledButton.Info>
            {props.icon && iconSide === 'left' && (
              <StyledButton.Icon>
                <props.icon />
              </StyledButton.Icon>
            )}
            {props.title && (
              <StyledButton.Title
                clean={props.clean}
                textCenter={props.textCenter}
                textColor={props.textColor}
                big={props.big}>
                {props.title}
              </StyledButton.Title>
            )}
            {props.children}
          </StyledButton.Info>
          {props.icon && iconSide === 'right' && (
            <StyledButton.Icon>
              <props.icon />
            </StyledButton.Icon>
          )}
        </>
    );

    const hasColor = !!props.color;
    const hasGradient = !!props.colors;

    return (
        <StyledButton
            disabled={props.disabled}
            border={props.border}
            onPress={props.onPress}
            big={props.big}
        >
            <StyledButton.Button
                {...(hasColor && {color: props.color})}
                clean={props.clean}>
                {renderChildren()}
            </StyledButton.Button>
        </StyledButton>
    );
};

export default Button;