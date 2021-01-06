import React, { PureComponent } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Topic } from "../../../components/Topic";
import { appStyle } from "../../../utils";
import { RootState } from "../../../redux/reducers";
import { bindActionCreators, Dispatch } from "redux";
import { getTopic } from "../../../redux/actions";
import { connect } from "react-redux";

const mapStateToProps = (state: RootState) => ({
  topic: state.topic,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getTopic,
    },
    dispatch,
  );

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

class HomeTopicComponent extends PureComponent<Props> {

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.getTopic();
  }

  render() {
    const data = this.props.topic;
    return (
      <View style={[style.root, appStyle.shadow_1]}>
        <Text style={style.title}>Topics</Text>
        {data &&
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data.topic}
          renderItem={(item) =>
            <Topic
              image={item.item.cover_photo.urls.thumb}
              appTitle={item.item.title} />
          }
        />
        }
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeTopicComponent);

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
});
