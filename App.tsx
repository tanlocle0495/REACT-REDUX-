/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import { store } from "./src/redux";
import Navigator from "./src/navigation/Navigator";

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navigator/>
      </Provider>
    </>
  );
};

export default App;
