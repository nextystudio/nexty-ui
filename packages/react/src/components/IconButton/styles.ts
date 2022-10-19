import { styled } from 'styles'

export const IconButtonLoading = styled('span', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Icon = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  svg: {
    width: '$5',
    height: '$5',
  },
})

export const IconButton = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  borderRadius: '$sm',
  cursor: 'pointer',
  transition: 'background $transitions$fast ease 0s',
  border: '$borderWidths$thick solid transparent',
  '&:disabled': {
    cursor: 'not-allowed',
  },
  variants: {
    variant: {
      primary: {
        $$backgroundColor: '$colors$nexty500',
        $$color: '$colors$white',
        $$hoverColor: '$colors$nexty300',

        backgroundColor: '$$backgroundColor',
        color: '$$color',
        '&:disabled': {
          opacity: '$medium',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$$hoverColor',
        },
      },
      secondary: {
        $$backgroundColor: '$colors$gray700',
        $$color: '$colors$white',
        $$hoverColor: '$colors$gray600',

        backgroundColor: '$$backgroundColor',
        color: '$$color',
        '&:disabled': {
          opacity: '$medium',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$$hoverColor',
        },
      },
      tertiary: {
        $$backgroundColor: 'transparent',
        $$color: '$colors$white',
        $$hoverColor: '$colors$gray700',

        backgroundColor: '$$backgroundColor',
        color: '$$color',
        '&:disabled': {
          opacity: '$medium',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$$hoverColor',
        },
      },
    },
    size: {
      sm: {
        width: '$8',
        height: '$8',
      },
      md: {
        width: '$10',
        height: '$10',
      },
      lg: {
        width: '$12',
        height: '$12',
      },
    },
    loading: {
      true: {
        [`${Icon}`]: {
          visibility: 'hidden',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
})
