import { keyframes, styled } from 'styles'

export const Rotate360 = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

export const Spinner = styled('span', {
  $$baseColor: '$colors$white',
  $$borderWidth: '$borderWidths$thick',

  display: 'block',
  position: 'relative',
  boxSizing: 'border-box',
  '&::before, &::after': {
    content: '',
    boxSizing: 'inherit',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '$full',
    borderWidth: '$$borderWidth',
    borderStyle: 'solid',
    animation: `0.6s linear 0s infinite normal none running ${Rotate360}`,
  },
  '&::before': {
    borderColor: '$$baseColor transparent $$baseColor $$baseColor',
  },
  '&::after': {
    borderColor: 'transparent $$baseColor transparent transparent',
    opacity: '$medium',
  },
  variants: {
    size: {
      sm: {
        width: '$3',
        height: '$3',
      },
      md: {
        width: '$4',
        height: '$4',
      },
      lg: {
        $$borderWidth: '3px',
        width: '$6',
        height: '$6',
      },
      xl: {
        $$borderWidth: '3px',
        width: '$8',
        height: '$8',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

Spinner.displayName = 'Spinner'
