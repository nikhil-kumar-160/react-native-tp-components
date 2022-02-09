import React from 'react';
import {
  FlatList,
  View,
  Text as FText,
  TouchableOpacity as FTouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MessageCard from '../messageCard';
import Styles from './Styles';
import PropTypes from 'prop-types';
import {Data} from './data';

const MessageList = ({data, onViewAll, onPress, showViewAllButton}) => {
  const ViewAllButton = () => {
    return (
      <FTouchableOpacity
        style={Styles.viewAllButtonContainer}
        onPress={onViewAll}>
        <FText style={Styles.viewAllText}>View all</FText>
        <View style={Styles.arrow}>
          <Feather name="arrow-right" size={16} color={'blue'} />
          <View style={Styles.blueBackground} />
        </View>
      </FTouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={({item, index}) => (
        <MessageCard
          isRead={item.read}
          title={item.title}
          tagsStrippedBody={item.tagsStrippedBody}
          dateTime={item.date}
          onPress={() => onPress(item, index)}
        />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={Styles.separator} />}
      horizontal
      ListFooterComponent={() => showViewAllButton && <ViewAllButton />}
      ListHeaderComponent={() => <View style={Styles.separator} />}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={Styles.listContentStyle}
    />
  );
};

export default MessageList;

MessageList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onViewAll: PropTypes.func,
  onPress: PropTypes.func,
  showViewAllButton: PropTypes.bool,
};

MessageList.defaultProps = {
  data: Data,
  onViewAll: () => console.log('view all button pressed'),
  onPress: (item) => console.log('message pressed', item),
  showViewAllButton: true,
};
