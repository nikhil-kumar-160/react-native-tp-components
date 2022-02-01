import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ComponentViewer from './ComponentViewer';

const Drawer = createDrawerNavigator();

const ComponentsDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ClaimsList" component={ComponentViewer} />
      <Drawer.Screen name="MessageList" component={ComponentViewer} />
    </Drawer.Navigator>
  );
};

export default ComponentsDrawer;
