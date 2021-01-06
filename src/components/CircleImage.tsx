import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { color } from "../utils";
import * as url from "url";

interface Props {
  radius: number,
  uri:string |"https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=80&q=80"

}

export const CircleImage: React.FC<Props> = ({ radius,uri }) => {
  const size = radius * 2;
  return (
    <View style={[style.root, { width: size, height: size, borderRadius: radius }]}>
      <Image
        style={{width:size,height:size, resizeMode:"cover",borderRadius:radius}}
        source={{uri:uri}}
      />
    </View>

  );
};

const style = StyleSheet.create({
  root: {
    margin:4,
    backgroundColor: color.gray,
  },

});
