import { ComponentProps, ElementType } from 'react'
import { styled } from 'styles'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$base',
  color: '$gray100',

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' }, // 40
      lg: { fontSize: '$4xl' }, // 56
      xl: { fontSize: '$6xl' }, // 72
      '2xl': { fontSize: '$7xl' }, // 96
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'
