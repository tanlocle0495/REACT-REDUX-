import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import {RouteProp} from '@react-navigation/native';

export type RootStackParamList = {
  home: undefined
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'home'
  >;

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'home'>;
