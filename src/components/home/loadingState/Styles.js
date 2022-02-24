import {Dimensions, StyleSheet} from 'react-native';
import {DP} from '../../../utils/Dimen';
import {Color} from '../../../utils/color';
import {shadowObj} from '../../../utils/Utils';
const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    paddingTop: DP._16,
    paddingBottom: DP._100,
  },
  userName: {
    fontSize: DP._20,
  },
  sectionTitle: {
    fontSize: DP._16,
    color: Color.DARK,
    paddingLeft: DP._24,
  },
  myTripsSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: DP._8,
    marginBottom: DP._24,
  },
  tripsCard: {
    width: DP._312,
    height: DP._115,
    borderRadius: DP._12,
    borderWidth: DP._1,
    ...shadowObj,
  },
  claimsCardContainer: {
    marginTop: DP._8,
    flexDirection: 'row',
  },
  profileNameContainer: {
    flexDirection: 'row',
    paddingHorizontal: DP._24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilePicContainer: {
    width: DP._44,
    height: DP._44,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: DP._2,
    borderRadius: DP._22,
    backgroundColor: Color.BLUISH_PURPLE,
    borderColor: Color.DANDELION,
  },
  letter: {
    fontSize: DP._28,
    color: Color.WHITE,
  },
  editIconContainer: {
    backgroundColor: Color.DANDELION,
    position: 'absolute',
    height: DP._16,
    width: DP._16,
    top: -5,
    right: 0,
    borderRadius: DP._8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingCardStyle: (cardColor) => ({
    width: 0.4222 * deviceWidth,
    height: 175,
    backgroundColor: cardColor,
    borderRadius: 12,
    marginRight: DP._8,
  }),
  inboxTextPlaceholder: (width) => ({
    width: width,
    height: DP._12,
    marginBottom: DP._10,
    backgroundColor: '#eee',
  }),
  inboxPlaceholderContainer: {
    width: 0.539 * deviceWidth,
    height: DP._145,
    borderColor: Color.LIGHT_PERIWINKLE,
    borderWidth: DP._1,
    padding: DP._16,
    marginHorizontal: DP._24,
    marginTop: DP._8,
    borderRadius: DP._12,
    paddingTop: DP._15,
    backgroundColor: Color.WHITE,
    ...shadowObj,
  },
  arrowContainer: {
    position: 'absolute',
    bottom: DP._16,
    right: 0,
    backgroundColor: Color.DODGER_BLUE_14,
    padding: DP._4,
    borderTopLeftRadius: DP._11,
    borderBottomLeftRadius: DP._11,
  },
  datePlaceholder: {
    width: '40%',
    height: 10,
    backgroundColor: '#eee',
    marginTop: DP._4,
  },
  animatedComponent: {flex: 1, width: DP._100},
  marginHorizontal_24: {
    marginHorizontal: DP._24,
  },
  flex: {
    flex: 1,
  },
  tripContainer: {
    padding: DP._10,
    marginHorizontal: DP._14,
  },
});
