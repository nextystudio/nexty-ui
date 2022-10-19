import type { StoryObj, Meta } from '@storybook/react'
import { LinkButton, LinkButtonProps } from '@nexty-ui/react'

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
  title: 'Form/LinkButton',
  component: LinkButton,
  args: {
    children: 'Label',
    variant: 'primary',
    size: 'sm',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['sm', 'md'],
      control: { type: 'inline-radio' },
    },
    disabled: { control: { type: 'boolean' } },
    leftIcon: iconArgType,
    rightIcon: iconArgType,
  },
} as Meta<LinkButtonProps>

export const Primary: StoryObj<LinkButtonProps> = {}

export const Secondary: StoryObj<LinkButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<LinkButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}
