import {StyleSheet, Dimensions} from 'react-native';
import {DP} from 'src/utils/Dimen';
import {shadowObj} from 'src/utils/Utils';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: 0.539 * width,
    height: DP._144,
    backgroundColor: 'white',
    padding: DP._16,
    borderRadius: DP._12,
    justifyContent: 'space-between',
    borderWidth: DP._0_5,
    borderColor: 'grey',
    marginVertical: DP._10,
    ...shadowObj,
  },
  message: (isRead) => ({
    color: isRead ? 'grey' : 'black',
    fontSize: DP._14,
    lineHeight: DP._21,
  }),
  date: (isRead) => ({
    marginBottom: DP._5,
    color: isRead ? 'grey' : 'black',
    fontSize: DP._12,
    marginTop: DP._10,
  }),
  arrowContainer: {
    position: 'absolute',
    padding: DP._4,
    bottom: DP._16,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderTopLeftRadius: DP._11,
    borderBottomLeftRadius: DP._11,
  },
});
