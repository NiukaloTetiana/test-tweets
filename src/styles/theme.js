export const theme = Object.freeze({
  colors: {
    background:
      'linear-gradient(142deg, #471ca9 0%, #5736a3 69.1%, #4b2a99 100%)',
    backgNav: '#766a92a8',
    light: '#ebd8ff',
    text: '#373737',
    green: '#5cd3a8',
    accent: '#28d188',
    pink: '#f67fea',
    orange: '#f8962d',
    logo: '#ffffff4c',
  },

  spacing: value => `${value * 4}px`,
  shadows: {
    text: 'rgb(11, 9, 9) 1px 1px 1px;',
    small: '3px 3px 3px #014e49, 3px 3px 5px #ffffff82',
    regular: 'inset 0 0 7px #100e0e, inset 3px 3px 5px #0b85984d',
    line: 'inset 0 3px 3px 0 #fbf8ff, 0 3px 3px 0 rgba(0, 0, 0, 0.06), inset 0 -2px 3px 0 #ae7be3',
    box: '0 3px 3px 0 rgba(0, 0, 0, 0.25)',
    card: '-3px 7px 21px 0 rgba(0, 0, 0, 0.23)',
  },

  transition: {
    delay: '300ms',
    trnz: 'ease',
  },
});
