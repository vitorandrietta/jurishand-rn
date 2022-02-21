import { DefaultTheme } from 'react-native-paper';
import colors from './colors';

const theme: typeof DefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
    primary: colors.primary,
    accent: colors.accent,
    text: colors.text,
    backdrop: colors.backdrop,
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: { fontFamily: 'roboto400' },
    medium: { fontFamily: 'roboto700' },
  },
};
export default theme;
