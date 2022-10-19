import type { Meta } from '@storybook/react'
import { Box, Text as TextComponent, TextProps } from '@nexty-ui/react'

export default {
  title: 'Typography/Text',
  component: TextComponent,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget mi eu justo imperdiet congue id eu orci. Cras vehicula nunc eu mi efficitur porta. Sed porta velit et luctus tempor.',
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            all: 'unset',
            width: '$80',
            display: 'block',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextProps>

export const Text = {}
