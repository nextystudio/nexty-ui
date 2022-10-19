import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#1b1b22'
      },
      {
        name: 'light',
        value: '#FFFFFF'
      }
    ]
  },
  docs: {
    theme: themes.dark,
  },
  options: {
    storySort: {
      order: ['Tokens', 'Layout', 'Data display', 'Form', 'Feedback', 'Typography', '*'],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    }}>
      {Story()}
    </div>
  ),
];
