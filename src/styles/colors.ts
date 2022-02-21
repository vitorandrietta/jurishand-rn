export default {
  primary: '#2FA1C7',
  accent: '#E74E0F',
  gradient: '#29BFBF',
  accentGradient: '#FF7700',
  secondaryAction: '#F57846',
  green: '#0AC77C',
  greenGradient: '#00D198',
  text: '#000000cc',
  black: '#000',
  white: '#FFF',
  danger: '#E74E0F',
  error: '#E74E0F',
  backdrop: 'transparent',
};

/**
 * Calculates the opacity of a given color
 * @param hex Hexadecimal color string
 * @param opacity A number between 0 and 1
 */
export const withOpacity = (hex: string, opacity: number) => {
  let color = hex.replace(/[^0-9a-f]/gi, '');
  const isValid = color.length === 6 || color.length === 3;

  if (!isValid) {
    throw new Error('Invalid hexadecimal');
  }

  if (color.length === 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  }

  let alpha: number | string = opacity;
  if (opacity < 0) {
    alpha = 0;
  }
  if (opacity > 1) {
    alpha = 1;
  }

  alpha = `0${Math.round(alpha * 255).toString(16)}`.slice(-2);

  color = `#${color}${alpha}`;

  return color;
};
