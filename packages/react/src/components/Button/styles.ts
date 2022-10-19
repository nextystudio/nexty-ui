import { styled } from 'styles'

export const ButtonLabel = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  svg: {
    width: '$4',
    height: '$4',
  },
  '* + *': {
    marginLeft: '$3',
  },
})

export const Button = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  borderRadius: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  boxSizing: 'border-box',
  cursor: 'pointer',
  transition: 'background $transitions$fast ease 0s',
  '&:disabled': {
    cursor: 'not-allowed',
  },
  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$nexty500',
        '&:disabled': {
          opacity: '$medium',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$nexty300',
        },
      },
      secondary: {
        color: '$white',
        backgroundColor: '$gray700',
        '&:disabled': {
          opacity: '$medium',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$gray600',
        },
      },
      tertiary: {
        color: '$gray100',
        '&:disabled': {
          color: '$gray600',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$gray700',
          color: '$white',
        },
      },
    },
    size: {
      sm: {
        fontSize: '$sm',
        padding: '$3 $4',
      },
      md: {
        fontSize: '$md',
        padding: '$4 $5',
      },
      lg: {
        fontSize: '$md',
        padding: '$5 $7',
      },
    },
    full: {
      true: {
        width: '100%',
      },
    },
    loading: {
      true: {
        [`${ButtonLabel}`]: {
          visibility: 'hidden',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export const ButtonLoading = styled('span', {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
