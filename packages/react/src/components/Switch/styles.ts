import * as Switch from '@radix-ui/react-switch'
import { styled } from 'styles'

export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  variants: {
    disabled: {
      true: {
        opacity: '$medium',
        cursor: 'not-allowed',
      },
    },
  },
})

export const StyledSwitch = styled(Switch.Root, {
  all: 'unset',
  width: 48,
  height: 24,
  backgroundColor: '$gray900',
  borderRadius: '$full',
  position: 'relative',
  WebkitTapHighlightColor: 'transparent',
  '&[data-state="checked"]': {
    backgroundColor: '$nexty500',
  },
})

export const StyledThumb = styled(Switch.Thumb, {
  display: 'block',
  width: 18,
  height: 18,
  backgroundColor: '$gray100',
  borderRadius: '$full',
  transition: 'transform $transitions$fast ease 0s',
  transform: 'translateX(4px)',
  willChange: 'transform',
  '&[data-state="checked"]': {
    transform: 'translateX(26px)',
  },
})
