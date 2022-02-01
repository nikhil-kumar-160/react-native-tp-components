import React from 'react';
import { Text } from 'react-native';
import { ClaimsList, MessageList } from 'react-native-tp-components';

const Components = ({ route }) => {
  switch (route.name) {
    case 'ClaimsList':
      return <ClaimsList />;
    case 'MessageList':
      return <MessageList />;
    default:
      return <Text>Component Not Found</Text>;
  }
};

export default Components;
