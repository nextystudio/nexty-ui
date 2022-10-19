import React, { ComponentProps, forwardRef, ElementType } from 'react'
import { Button as StyledButton, ButtonLoading, ButtonLabel } from './styles'

import { Spinner } from '../Spinner'

export interface ButtonProps extends ComponentProps<typeof StyledButton> {
  as?: ElementType
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  loading?: boolean
}

export const Button = forwardRef<
  React.ElementRef<typeof StyledButton>,
  ButtonProps
>(({ children, leftIcon, rightIcon, loading, ...props }, forwardRef) => {
  return (
    <StyledButton loading={loading} ref={forwardRef} {...props}>
      <ButtonLabel>
        {leftIcon}
        <span>{children}</span>
        {rightIcon}
      </ButtonLabel>

      {loading && (
        <ButtonLoading>
          <Spinner />
        </ButtonLoading>
      )}
    </StyledButton>
  )
})

Button.displayName = 'Button'
