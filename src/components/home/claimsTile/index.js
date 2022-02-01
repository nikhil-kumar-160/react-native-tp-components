import React from 'react';
import Styles from './Styles';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import FText from '../../../common/rn/FText';
import FTouchableOpacity from '../../../common/rn/FTouchableOpacity';

const ClaimsTile = ({
  type,
  onPress,
  disabled,
  quantity,
  amount,
  cardColor,
  noClaim,
  cardTitle,
  subText,
  style,
  date,
}) => {
  return (
    <>
      {type === 'small' && (
        <FTouchableOpacity
          style={[Styles.container(cardColor), style]}
          onPress={onPress}
          disabled={disabled}>
          <FText type="medium" style={Styles.quantity}>
            {quantity}
          </FText>
          <FText style={Styles.title}>{subText}</FText>
          <View style={Styles.amountContainer}>
            <FText type="medium" style={Styles.amount}>
              {amount}
            </FText>
          </View>
        </FTouchableOpacity>
      )}
      {type === 'large' && (
        <FTouchableOpacity
          style={[
            Styles.container(cardColor, noClaim),
            Styles.containerSecondary,
          ]}
          onPress={onPress}
          disabled={disabled}>
          {noClaim ? null : (
            <>
              {amount ? (
                <FText type="medium" style={Styles.amountSecondary}>
                  {amount}
                </FText>
              ) : (
                <FText type="medium" style={Styles.amountSecondary}>
                  {quantity}
                </FText>
              )}
            </>
          )}
          {noClaim ? (
            <>
              <FText style={[Styles.title]}>
                <FText style={Styles.color_White} type="semiBold">
                  Add
                </FText>{' '}
                your first expense claim
              </FText>
            </>
          ) : (
            <>
              <View>
                <FText type="semiBold" style={Styles.claimsText}>
                  {cardTitle}
                </FText>
                <FText style={[Styles.title, Styles.lowerCase]}>
                  {subText}
                </FText>
              </View>
              <View style={Styles.dateAndArrowContainer}>
                {date && (
                  <FText type={'medium'} style={Styles.dateText}>
                    {date}
                  </FText>
                )}
              </View>
            </>
          )}
        </FTouchableOpacity>
      )}
    </>
  );
};

export default ClaimsTile;

ClaimsTile.propTypes = {
  type: PropTypes.oneOf(['small', 'large']),
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  quantity: PropTypes.string,
  amount: PropTypes.string,
  cardColor: PropTypes.string,
  noClaim: PropTypes.bool,
  cardTitle: PropTypes.string,
  subText: PropTypes.string,
  style: PropTypes.object,
  date: PropTypes.string,
};
