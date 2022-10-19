import { ComponentProps } from 'react'
import { Tag as TagStyled } from './styles'

export interface TagProps extends ComponentProps<typeof TagStyled> {}

export const Tag = ({ children, ...props }: TagProps) => {
  return (
    <TagStyled {...props}>
      <span>{children}</span>
    </TagStyled>
  )
}

Tag.displayName = 'Tag'
