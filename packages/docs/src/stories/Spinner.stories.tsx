import type { Meta } from '@storybook/react'
import { Spinner as SpinnerComponent } from '@nexty-ui/react'

export default {
  title: 'Feedback/Spinner',
  component: SpinnerComponent,
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta

export const Spinner = {}
