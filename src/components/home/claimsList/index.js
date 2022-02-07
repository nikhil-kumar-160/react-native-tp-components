import React from 'react';
import {FlatList} from 'react-native';
import ClaimsTile from '../claimsTile';
import Styles from './Styles';
import PropTypes from 'prop-types';
import {Data} from './data';

const ClaimsList = (props) => {
  return (
    <FlatList
      data={props.data}
      renderItem={({item}) => (
        <ClaimsTile
          {...item}
          type={'large'}
          onPress={() => props.onPress(item)}
        />
      )}
      keyExtractor={(item) => item.id}
      horizontal={true}
      style={Styles.container}
      contentContainerStyle={Styles.contentContainerStyle}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ClaimsList;

ClaimsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onPress: PropTypes.func,
};

ClaimsList.defaultProps = {
  onPress: (item) => console.log('card pressed', item),
  data: Data,
};
