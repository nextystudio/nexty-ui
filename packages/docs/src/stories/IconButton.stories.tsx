import type { StoryObj, Meta } from '@storybook/react'
import { IconButton, IconButtonProps } from '@nexty-ui/react'

import { Plus, DiscordLogo, SnapchatLogo } from 'phosphor-react'

const iconArgType = {
  options: ['Plus', 'DiscordLogo', 'SnapchatLogo'],
  mapping: {
    Plus: <Plus />,
    DiscordLogo: <DiscordLogo weight="fill" />,
    SnapchatLogo: <SnapchatLogo weight="fill" />,
  },
  control: {
    type: 'select',
  },
}

export default {
  title: 'Form/IconButton',
  component: IconButton,
  args: {
    icon: <Plus />,
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  },
  argTypes: {
    icon: iconArgType,
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    disabled: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
  },
} as Meta<IconButtonProps>

export const Primary: StoryObj<IconButtonProps> = {}

export const Secondary: StoryObj<IconButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<IconButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}

export const Loading: StoryObj<IconButtonProps> = {
  args: {
    loading: true,
  },
}

export const Disabled: StoryObj<IconButtonProps> = {
  args: {
    disabled: true,
  },
}
