import * as Checkbox from '@radix-ui/react-checkbox'
import { styled, keyframes } from 'styles'

const appearIn = keyframes({
  '0%': { transform: 'scale(0)' },
  '100%': { transform: 'scale(1)' },
})

const appearOut = keyframes({
  '0%': { transform: 'scale(1)' },
  '100%': { transform: 'scale(0)' },
})

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  border: '$borderWidths$thick solid $gray900',

  '&[data-state="checked"]': {
    backgroundColor: '$nexty300',
  },

  '&:focus': {
    border: '$borderWidths$thick solid $nexty300',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${appearIn} $transitions$fast ease-out`,
  },

  '&[data-state="unchecked"]': {
    animation: `${appearOut} $transitions$fast ease-out`,
  },
})
