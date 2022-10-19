import type { Meta, StoryObj } from '@storybook/react'
import { Switch as SwitchComponent, SwitchProps } from '@nexty-ui/react'

export default {
  title: 'Form/Switch',
  component: SwitchComponent,
  args: {
    children: 'Label',
    disabled: false,
  },
  argTypes: {
    disabled: { control: { type: 'boolean' } },
  },
} as Meta<SwitchProps>

export const Default: StoryObj<SwitchProps> = {}

export const Disabled: StoryObj<SwitchProps> = {
  args: {
    disabled: true,
  },
}
