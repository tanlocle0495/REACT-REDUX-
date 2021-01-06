import { StyleSheet } from "react-native";

export const appStyle = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#EEEEEE",
  },
  shadow_1:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
  },
  blackOpacityBg:{
    backgroundColor:"#111",
    opacity:0.2
  }
});

export const color = {
  green: "#48B8C4",
  gray: "#cccccc"
};
