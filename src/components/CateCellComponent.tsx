import React, { PureComponent } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { appStyle } from "../utils";


interface Props {
  image:string,
  data:any,
  title:string
}
export class CateCellComponent extends PureComponent<Props>{
  render(){
    return(
      <View style={[style.root,appStyle.shadow_1]}>
        <ImageBackground
        style={style.image}
        imageStyle={{borderRadius:16}}
          source={{uri:this.props.image}}>
          <View style={style.background}/>
          <Text style={style.title}>{this.props.title}</Text>
        </ImageBackground>
      </View>
    )
  }
}

const  style = StyleSheet.create({
    root:{
      width:120,
      marginLeft:4,
      marginRight:4,
      height:170,
      borderRadius:16,
      backgroundColor:"#fff"
    },
    image:{
      width:"100%",
      height:"100%",
      borderRadius:16,
      resizeMode:"cover"
    },
    title:{
      fontWeight:"400",
      padding:4,
      color:"#FFF",
      fontSize:20,
    },
    background:{backgroundColor:"black",
      width:"100%",
      borderRadius:16,
      height:"100%",
      position: 'absolute', opacity:0.4}
})
