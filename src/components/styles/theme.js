export const theme = Object.freeze({
  colors: {
    accent: '#477ac8',
    grine: '#0b85984d',
    gray: '#9e9e9e',
    blue: 'rgb(4, 115, 113)',
    light: 'rgb(12, 181, 170)',
    dark: 'rgb(10, 158, 156)',
    background: '#d8e0ff',
    text: '#d1f9ff',
    white: '#fff',
  },

  spacing: value => `${value * 4}px`,
  shadows: {
    text: 'rgb(11, 9, 9) 1px 1px 1px;',
    small: '3px 3px 3px #014e49, 3px 3px 5px #0b85984d',
    regular: 'inset 0 0 7px #100e0e, inset 3px 3px 5px #0b85984d;',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
    box: '0px 4px 10px 4px #0b85984d',
  },

  transition: {
    delay: '300ms',
    trnz: 'ease',
  },
});
