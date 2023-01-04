import { ComponentProps, ElementType } from 'react'
import { styled } from 'styles'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  color: '$gray100',
  margin: 0,

  variants: {
    size: {
      xxs: { fontSize: '$xxs' }, // 10
      xs: { fontSize: '$xx' }, // 12
      sm: { fontSize: '$sm' }, // 14
      md: { fontSize: '$md' }, // 16
      lg: { fontSize: '$lg' }, // 18
      xl: { fontSize: '$xl' }, // 22
      '2xl': { fontSize: '$2xl' }, // 26
    },

    weight: {
      regular: { fontWeight: '400' },
      medium: { fontWeight: '500' },
      semibold: { fontWeight: '600' },
    },
  },

  defaultVariants: {
    size: 'md',
    weight: 'regular',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'
