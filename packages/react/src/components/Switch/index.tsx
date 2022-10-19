import { ComponentProps } from 'react'
import { StyledSwitch, StyledThumb, Flex } from './styles'
import { Text } from 'components/Text'

export interface SwitchProps extends ComponentProps<typeof StyledSwitch> {}

export const Switch = ({ children, disabled }: SwitchProps) => {
  return (
    <Flex disabled={disabled}>
      <Text
        as="label"
        htmlFor="switch"
        css={{ paddingRight: '$4', userSelect: 'none' }}
      >
        {children}
      </Text>
      <StyledSwitch defaultChecked id="switch" disabled={disabled}>
        <StyledThumb />
      </StyledSwitch>
    </Flex>
  )
}

Switch.displayName = 'Switch'
