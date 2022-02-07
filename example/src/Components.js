import React from 'react';
import {Text} from 'react-native';
import {
  ClaimsList,
  MessageList,
  LoadingState,
  FlightCard,
  FlightOptions,
} from 'react-native-tp-components';

import {COMPONENTS} from './ComponentList';

const Components = ({route}) => {
  switch (route.name) {
    case COMPONENTS[0]:
      return <ClaimsList />;
    case COMPONENTS[1]:
      return <MessageList />;
    case COMPONENTS[2]:
      return <LoadingState />;
    case COMPONENTS[3]:
      return <FlightCard />;
    case COMPONENTS[4]:
      return <FlightOptions />;
    default:
      return <Text>Component Not Found</Text>;
  }
};

export default Components;
