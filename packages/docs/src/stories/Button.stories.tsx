import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@nexty-ui/react'

import { DiscordLogo, SnapchatLogo } from 'phosphor-react'

const iconArgType = {
  options: ['noIcon', 'DiscordLogo', 'SnapchatLogo'],
  mapping: {
    noIcon: null,
    DiscordLogo: <DiscordLogo weight="fill" />,
    SnapchatLogo: <SnapchatLogo weight="fill" />,
  },
  control: {
    type: 'select',
    labels: {
      noIcon: 'No icon',
    },
  },
}

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Lorem ipsum',
    variant: 'primary',
    size: 'md',
    full: false,
    disabled: false,
    loading: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    },
    full: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    loading: { control: { type: 'boolean' } },
    leftIcon: iconArgType,
    rightIcon: iconArgType,
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}

export const Full: StoryObj<ButtonProps> = {
  args: {
    full: true,
  },
}

export const Loading: StoryObj<ButtonProps> = {
  args: {
    loading: true,
  },
}
