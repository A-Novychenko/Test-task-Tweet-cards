export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    darkGrey: '#7c7c7c',
    lightGrey: '#dddddd',
    lightGrayTransparency: 'rgba(221, 221, 221, 0.8)',
    darckGrayTransparency: 'rgba(124, 124, 124, 0.3)',
    black: '##000000',
    lightBlue: '#31b7f5',
  },
  spacing: (...values) => {
    let value = '';
    for (let i = 0; i < values.length; i += 1) {
      value += `${4 * values[i]}px `;
    }
    return value;
  },

  boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
});
