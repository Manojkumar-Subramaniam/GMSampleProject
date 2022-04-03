import {StyleSheet} from 'react-native';
import colors from '../../../Utils/colors';

const styles = StyleSheet.create({
  rootView: {
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  loader: {
    alignSelf: 'center',
  },
  retryBtn: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.HIGHLIGHTED,
    borderRadius: 20,
    textAlign: 'center',
  },
  retryTxt: {
    margin: 16,
    color: colors.WHITE,
  },
});

export default styles;
