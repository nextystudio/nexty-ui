import type { Meta } from '@storybook/react'
import { Heading as HeadingComponent, HeadingProps } from '@nexty-ui/react'

export default {
  title: 'Typography/Heading',
  component: HeadingComponent,
  args: {
    children: 'Title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Heading = {}
