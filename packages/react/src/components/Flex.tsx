import { ComponentProps, ElementType } from 'react'
import { styled } from 'styles'

export const Flex = styled('div', {
  display: 'flex',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },

    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
    },

    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
      spaceBetween: {
        justifyContent: 'space-between',
      },
      spaceAround: {
        justifyContent: 'space-around',
      },
    },

    gap: {
      px: {
        gap: '$px',
      },
      1: {
        gap: '$1',
      },
      2: {
        gap: '$2',
      },
      3: {
        gap: '$3',
      },
      4: {
        gap: '$4',
      },
      5: {
        gap: '$5',
      },
      6: {
        gap: '$6',
      },
      7: {
        gap: '$7',
      },
      8: {
        gap: '$8',
      },
      9: {
        gap: '$9',
      },
      10: {
        gap: '$10',
      },
      12: {
        gap: '$12',
      },
      16: {
        gap: '$16',
      },
      18: {
        gap: '$18',
      },
      22: {
        gap: '$22',
      },
      26: {
        gap: '$26',
      },
      35: {
        gap: '$35',
      },
      44: {
        gap: '$44',
      },
      64: {
        gap: '$64',
      },
      80: {
        gap: '$80',
      },
    },
  },
})

export interface FlexProps extends ComponentProps<typeof Flex> {
  as?: ElementType
  disabled?: boolean
}

Flex.displayName = 'Flex'
