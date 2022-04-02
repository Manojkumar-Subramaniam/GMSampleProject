import {StyleSheet} from 'react-native';
import {Colors} from '../../Utils';
import colors from '../../Utils/colors';

const styles = StyleSheet.create({
  rootView: {
    zIndex: 1,
    elevation: 1,
    shadowRadius: 5,
    margin: 5,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    borderRadius: 10,
    shadowColor: Colors.GMCARD_SHADOW,
    backgroundColor: colors.GMCARD_PRIMARY,
  },
});

export default styles;
