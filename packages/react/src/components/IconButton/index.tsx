import React, { ComponentProps, ElementType } from 'react'
import {
  IconButton as StyledIconButton,
  Icon as StyledIcon,
  IconButtonLoading,
} from './styles'
import { Spinner } from 'components/Spinner'

export interface IconButtonProps
  extends ComponentProps<typeof StyledIconButton> {
  as?: ElementType
  icon: React.ReactElement
  loading?: boolean
}

export const IconButton = ({ icon, loading, ...props }: IconButtonProps) => {
  return (
    <StyledIconButton loading={loading} {...props}>
      <StyledIcon>{icon}</StyledIcon>

      {loading && (
        <IconButtonLoading>
          <Spinner />
        </IconButtonLoading>
      )}
    </StyledIconButton>
  )
}

IconButton.displayName = 'IconButton'
