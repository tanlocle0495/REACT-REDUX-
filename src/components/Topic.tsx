import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { appStyle } from "../utils";

interface Props {
  appTitle: string,
  image: string
}

export const Topic: React.FC<Props> = ({ appTitle, image }) => {
  return (
    <View style={[style.container, { backgroundColor: "#cccccc" }]}>
      <ImageBackground
        style={style.image}
        imageStyle={{ borderRadius: 16 }}
        source={{ uri: image }}>
        <View style={[appStyle.blackOpacityBg, style.background]} />
        <Text style={style.title}>{appTitle}</Text>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "red",
    justifyContent: "center",


    margin: 4,
    width: 200,

    borderRadius: 16,
  },
  image: {
    width: 200,
    height: 70,
    alignItems: "center",
    alignContent: "center",
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 16,
  },
  title: {
    color: "#FFF",
    fontSize: 25,
    fontWeight: "400",
  },
  background: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    position: "absolute",
  },
});
