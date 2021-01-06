import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "./NavigationType";
import HomePage from "../page/home/HomePage";

const Stack = createStackNavigator<RootStackParamList>();

class Navigator extends React.PureComponent {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerShown:true,
            headerStyle: {
              backgroundColor: "#fff",
            },
            // headerTitle: (props) => <LogoTitle />,
            //   headerLeft: (props) => (
            //   <LeftNavigationBarButton></LeftNavigationBarButton>
            // ),
            //   headerRight: (props) => (
            //   <RightNavigationBarButton></RightNavigationBarButton>
            // ),
          }}>
          <Stack.Screen
            name="home"
            component={HomePage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigator;
