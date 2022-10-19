import React, { ComponentProps, ElementType } from 'react'
import { LinkButton as Button, Label } from './styles'

export interface LinkButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
}

export const LinkButton = ({
  children,
  leftIcon,
  rightIcon,
  ...props
}: LinkButtonProps) => {
  return (
    <Button {...props}>
      <Label>
        {leftIcon}
        <span>{children}</span>
        {rightIcon}
      </Label>
    </Button>
  )
}

LinkButton.displayName = 'LinkButton'
