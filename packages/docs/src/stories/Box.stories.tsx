import type { Meta } from '@storybook/react'
import { Box as BoxComponent, BoxProps } from '@nexty-ui/react'

const BoxCSS = () => {
  return (
    <BoxComponent
      css={{
        width: '$80',
        height: '$80',
        backgroundColor: '$gray700',
      }}
    />
  )
}

export default {
  title: 'Layout/Box',
  component: BoxCSS,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
} as Meta<BoxProps>

export const Box = {}
