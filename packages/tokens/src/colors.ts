const baseColors = {
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',

  gray100: '#E1E1E6',
  gray200: '#C4C4CC',
  gray300: '#8D8D99',
  gray400: '#7C7C8A',
  gray500: '#505059',
  gray600: '#323238',
  gray700: '#29292E',
  gray800: '#202024',
  gray900: '#121214',
  gray950: '#09090A',

  nexty300: '#713FFF',
  nexty500: '#5729DA',
  nexty700: '#3D15AC',
  nexty900: '#270B76',
}

const aliases = {
  'primary-light': baseColors.nexty300,
  'primary-default': baseColors.nexty500,
  'primary-dark': baseColors.nexty700,
  'primary-low': baseColors.nexty900,

  'text-title': baseColors.gray100,
  'text-base': baseColors.gray200,
}

export const colors = { ...baseColors, ...aliases }
