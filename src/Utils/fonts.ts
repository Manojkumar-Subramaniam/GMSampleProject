import {StyleSheet} from 'react-native';
import colors from './colors';

const fonts = StyleSheet.create({
  fontNormalBlack: {
    fontSize: 16,
    fontWeight: 'normal',
    color: colors.BLACK,
  },
  fontNormalHighlighted: {
    fontSize: 16,
    fontWeight: 'normal',
    color: colors.HIGHLIGHTED,
  },
});

export default fonts;
