import { ComponentProps, ElementType } from 'react'
import { styled } from 'styles'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray100',
  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      xl: { fontSize: '$6xl' },
      '2xl': { fontSize: '$7xl' },
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
