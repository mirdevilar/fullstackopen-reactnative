import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: 'white',

    bgBody: '#192025',
    bgContent: '#26313b',
    bgAccent: '#2a7ac3',

    error: '#ff4444',
  },
  fontSizes: {
    tiny: 11,
    body: 14,
    subheading: 18,
    navEntry: 20,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'Arial',
    }),
  },
  fontWeights: {
    normal: 400,
    bold: 'bold',
  },
  paddings: {
    primary: 18,
    secondary: 12,
  },
  separations: {
    primary: 15,
    secondary: 10,
  },
};

export default theme;
