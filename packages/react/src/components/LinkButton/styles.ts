import { styled } from 'styles'

export const Label = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '* + *': {
    marginLeft: '$2',
  },
  svg: {
    width: '$4',
    height: '$4',
  },
  '> span': {
    position: 'relative',
    '&::before': {
      content: '',
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: 0,
      height: 1,
      transition: 'width 0.2s ease 0s',
    },
  },
})

export const LinkButton = styled('a', {
  all: 'unset',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'color $transitions$fast ease 0s',
  '&:hover': {
    [`${Label}`]: {
      '> span': {
        '&::before': {
          width: '100%',
        },
      },
    },
  },
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: '$medium',
  },
  variants: {
    variant: {
      primary: {
        [`${Label}`]: {
          $$baseColor: '$colors$nexty300',
          color: '$$baseColor',
          '> span': {
            '&::before': {
              backgroundColor: '$$baseColor',
            },
          },
        },
      },
      secondary: {
        [`${Label}`]: {
          $$baseColor: '$colors$gray200',
          color: '$$baseColor',
          '> span': {
            '&::before': {
              backgroundColor: '$$baseColor',
            },
          },
        },
      },
      tertiary: {
        [`${Label}`]: {
          $$baseColor: '$colors$gray300',
          color: '$$baseColor',
          '> span': {
            '&::before': {
              backgroundColor: '$$baseColor',
            },
          },
        },
      },
    },
    size: {
      sm: {
        height: '$5',
        fontSize: '$sm',
      },
      md: {
        height: '$6',
        fontSize: '$md',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
})
