# react-native-tp-components

The Repository is used for creating the UI components to be used inside the React Native app

## Installation

```sh
npm install react-native-tp-components
```

## Usage

```js
import { ComponentName } from 'react-native-tp-components';

```

## Contributing

1. clone the repository to local
2. run the command inside the respository (Recommended)
```
yarn bootstrap
```
If you don't want to use yarn, then run below commands inside the repository
```
npm i && cd example && npm i
cd ios && pod install && cd ..
```
To run the app

```sh
cd example
npm run ios
npm run android
```

Adding components and viewing inside the app

1. Create your component inside src/components
2. Export your component to src/index.js
3. To access the component inside the app, Go to example/src/Components.js
4. Import it from react-native-tp-components
5. Add it inside the switch block before the default case
  ```js
  ...
  import {... , YourComponentName} from 'react-native-tp-components';
  
  ...
  switch(route.name) {
    ...
    case 'YourComponentName': return <YourComponentName />;
    default: ....
  }
  ```
5. Go to example/src/ComponentsDrawer.js, Add a new Drawer Screen inside the Drawer Navigator
    ```js
    <Drawer.Navigator>
      ...
      <Drawer.Screen name='YourComponentName' component={ComponentViewer}>
    </Drawer.Navigator>
    ```
