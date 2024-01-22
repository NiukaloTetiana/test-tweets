export const theme = Object.freeze({
  colors: {
    background: '#d8e0ff',
    text: '#d1f9ff',
    gray: '#9e9e9e',
    white: '#e5eff2',
    sky: '#d2ecf5',
    blue: '#53a3a2',
    pinkBg: '#ffcaf0d1',
    pink: '#ffd7ed6f',
  },

  spacing: value => `${value * 4}px`,
  shadows: {
    text: 'rgb(11, 9, 9) 1px 1px 1px;',
    small: '3px 3px 3px #014e49, 3px 3px 5px #ffffff82',
    regular: 'inset 0 0 7px #100e0e, inset 3px 3px 5px #0b85984d;',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
    box: '0px 4px 10px 4px #ffffff82',
  },

  transition: {
    delay: '300ms',
    trnz: 'ease',
  },
});
