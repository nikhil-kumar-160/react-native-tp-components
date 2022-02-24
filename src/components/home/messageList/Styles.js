import {StyleSheet} from 'react-native';
import {DP} from '../../../utils/Dimen';

export default StyleSheet.create({
  viewAllButtonContainer: {
    paddingHorizontal: DP._16,
    borderWidth: 1,
    height: DP._144,
    borderStyle: 'dashed',
    borderRadius: DP._11,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: DP._8,
    borderColor: 'blue',
    marginVertical: DP._10,
  },
  viewAllText: {
    fontSize: 12,
    color: 'blue',
  },
  blueBackground: {
    width: DP._24,
    height: DP._24,
    position: 'absolute',
    backgroundColor: 'blue',
    opacity: 0.1,
    borderRadius: DP._12,
  },
  separator: {
    width: 8,
  },
  arrow: {
    padding: DP._4,
    position: 'absolute',
    bottom: DP._17,
  },
  listContentStyle: {
    paddingHorizontal: DP._16,
    paddingBottom: DP._24,
  },
});
