import type { Meta, StoryObj } from '@storybook/react'
import { Tag, TagProps } from '@nexty-ui/react'

export default {
  title: 'Data display/Tag',
  component: Tag,
  args: {
    children: 'LABEL',
    variant: 'active',
    size: 'md',
  },
  argTypes: {
    variant: {
      options: ['active', 'inactive'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<TagProps>

export const Active: StoryObj<TagProps> = {}

export const Inactive: StoryObj<TagProps> = {
  args: {
    variant: 'inactive',
  },
}
