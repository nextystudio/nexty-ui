import { styled } from 'styles'

export const Tag = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: '$default',
  fontWeight: '$bold',
  color: '$white',
  border: '$borderWidths$thin solid transparent',
  borderRadius: '$full',
  transition: 'background $fast ease 0s, color $fast ease 0s',
  cursor: 'default',
  variants: {
    variant: {
      active: {
        backgroundColor: '$gray600',
      },
      inactive: {
        color: '$gray200',
        backgroundColor: 'transparent',
        borderColor: '$gray600',
      },
    },
    size: {
      sm: {
        height: '$6',
        padding: '0 $3',
        fontSize: '$xxs',
      },
      md: {
        height: '$7',
        padding: '0 $3',
        fontSize: '$xs',
      },
      lg: {
        height: '$8',
        padding: '0 $4',
        fontSize: '$sm',
      },
    },
  },
  defaultVariants: {
    variant: 'active',
    size: 'md',
  },
})
