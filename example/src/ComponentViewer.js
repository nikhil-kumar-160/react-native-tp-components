import React from 'react';
import { View } from 'react-native';
import Components from './Components';

const ComponentViewer = ({ route }) => {
  return (
    <View>
      <Components route={route} />
    </View>
  );
};

export default ComponentViewer;
