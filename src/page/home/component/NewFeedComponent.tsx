import { Alert, FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { PureComponent ,} from "react";
import { PostComponent } from "../../../components/PostComponent";
import BrickList from 'react-native-masonry-brick-list';
import { RootState } from "../../../redux/reducers";
import { bindActionCreators, Dispatch } from "redux";
import { getPhotos } from "../../../redux/actions";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => ({
  photos: state.photos,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getPhotos,
    },
    dispatch,
  );

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>


 class NewFeedComponent extends PureComponent<Props>{

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    const  data = this.props.photos
    return (
      <View style={{width:"100%"}}>
        <Text style={style.title}>Photos</Text>

        {data &&
        <FlatList data={data.photos} renderItem={(item)=>
          <PostComponent data={item.item}/>}/>
        }
      </View>
    );
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(NewFeedComponent);

const renderView=(prop)=>{
  return(
    <View key={prop.id} style={{
      margin: 2,
      borderRadius: 2,
      backgroundColor: prop.color,
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }} >
      <Image
      style={{width:"100%",height:"100%"}}
        source={{uri:"https://images.unsplash.com/photo-1609602016838-9bb9a5b578ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"}}/>
    </View>
  )
};

const style = StyleSheet.create({
  title:{
    padding:4,
    fontSize:22,
    fontWeight:"700"
  }
});

