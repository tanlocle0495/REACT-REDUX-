import React, { PureComponent } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import { Topic } from "../../components/Topic";
import { appStyle } from "../../utils";
import HomeCateComponent  from "./component/Collection";
import HomeTopicComponent  from "./component/HomeTopicComponent";
import NewFeedComponent  from "./component/NewFeedComponent";


export default class HomePage extends PureComponent {

  render() {
    return (
      <View style={appStyle.root}>
        <FlatList
          data={[1, 2,3]}
          keyExtractor={item => item.toString()}
          renderItem={(item) => {
            if (item.index ===0){
            return  <HomeCateComponent/>
            }else if (item.index == 1){
              return <HomeTopicComponent/>
            }
             return <NewFeedComponent />;
          }}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  root: {},
});
