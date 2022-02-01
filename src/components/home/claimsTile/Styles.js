import { StyleSheet, Dimensions } from 'react-native';

import { DP } from '../../../utils/Dimen';
import { Color } from '../../../utils/color';
import { shadowObj } from '../../../utils/Utils';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: (backgroundColor, noClaim) => ({
    paddingTop: DP._16,
    paddingHorizontal: DP._12,
    paddingBottom: DP._12,
    borderRadius: DP._12,
    backgroundColor: backgroundColor,
    ...(noClaim ? { width: 0.4222 * width } : { minWidth: 0.4222 * width }),
    ...shadowObj,
  }),
  containerSecondary: {
    paddingTop: DP._24,
    paddingHorizontal: DP._16,
    paddingBottom: DP._16,
    marginRight: DP._8,
  },
  quantity: {
    fontSize: DP._18,
    color: 'white',
    marginBottom: DP._8,
  },
  title: {
    color: 'white',
    marginBottom: DP._8,
    fontSize: DP._14,
    lineHeight: DP._18,
  },
  amount: {
    fontSize: DP._20,
    color: 'white',
  },
  amountSecondary: {
    fontSize: DP._28,
    color: 'white',
    marginBottom: DP._24,
  },
  lowerCase: {
    textTransform: 'lowercase',
  },
  claimsText: {
    color: 'white',
    fontSize: DP._14,
    lineHeight: DP._18,
    textTransform: 'capitalize',
  },
  dateText: {
    fontSize: DP._12,
    color: 'white',
    borderRadius: DP._7,
    paddingHorizontal: DP._3,
    backgroundColor: '#0000001a',
    overflow: 'hidden',
  },
  dateAndArrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: DP._16,
    justifyContent: 'space-between',
    height: DP._18,
  },
  Flex: {
    flex: 1,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  color_White: { color: 'white' },
});
