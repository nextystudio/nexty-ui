import {
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  opacity,
  radii,
  space,
  transitions,
} from '@nexty-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    width: 'space',
    height: 'space',
    opacity: 'opacity',
  },

  theme: {
    borderWidths,
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    opacity,
    radii,
    space,
    transitions,
  },
})
