import React from 'react';
import {
  View,
  Text as FText,
  TouchableOpacity as FTouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Styles from './Styles';
import PropTypes from 'prop-types';

const MessageCard = ({isRead, dateTime, onPress, title, tagsStrippedBody}) => {
  return (
    <FTouchableOpacity style={Styles.container} onPress={onPress}>
      <FText
        type={isRead ? 'regular' : 'medium'}
        style={Styles.message(isRead)}
        numberOfLines={4}
        ellipsizeMode={'tail'}>
        {`${title}: ${tagsStrippedBody}`}
      </FText>
      <FText style={Styles.date(isRead)}>{dateTime}</FText>
      <View style={Styles.arrowContainer}>
        <Feather name="arrow-right" size={16} color={'blue'} />
      </View>
    </FTouchableOpacity>
  );
};

export default MessageCard;

MessageCard.propTypes = {
  isRead: PropTypes.bool,
  dateTime: PropTypes.string,
  onPress: PropTypes.func,
  title: PropTypes.string,
  tagsStrippedBody: PropTypes.string,
};
