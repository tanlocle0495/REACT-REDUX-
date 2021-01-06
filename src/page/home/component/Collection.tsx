import React, { PureComponent } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { appStyle } from "../../../utils";
import { CateCellComponent } from "../../../components/CateCellComponent";
import { bindActionCreators, Dispatch } from "redux";
import { getCollection, RootState } from "../../../redux";
import { connect } from "react-redux";

interface AppProps {

}

const mapStateToProps = (state: RootState) => ({
  collection: state.collection,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getCollection,
    },
    dispatch,
  );
const Loading = () => {
  return (<View style={style.loading}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>);
};
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

class HomeCateComponent extends PureComponent<Props> {

  componentDidMount() {
    this.props.getCollection();
  }

  constructor(props: Props) {
    super(props);
  }

  render() {
    const datas = this.props.collection;
    return (
      <View style={[style.root, appStyle.shadow_1]}>

        <Text style={style.title}>Collections</Text>

        {
          (datas.collection ==null)&&
          <Loading/>
        }
        {datas &&
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={datas.collection}
          renderItem={(item) =>
            <CateCellComponent
              title={item.item.title}
              data={item.item}
             image={item.item.cover_photo.urls.thumb} />
          }
        />

        }
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeCateComponent);

const style = StyleSheet.create({
  root: {
    width: "100%",
    paddingTop: 8,
    paddingBottom: 8,
    shadowColor: "#000",
  },
  title: {
    padding: 4,
    fontSize: 22,
    fontWeight: "700",
  },
  loading: {
    width: "100%",
    height: 170,
    marginBottom:4,
    justifyContent:"center",
    alignItems:"center"
  },
});
