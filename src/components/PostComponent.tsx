import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { appStyle, CONVERT_TYPE, convertStrDate } from "../utils";
import { CircleImage } from "./CircleImage";
import { PhotoEntry } from "../entry/PhotoEntry";
import { ICON } from "../utils/imageUtils";


interface Props {
  data: PhotoEntry
}

export const PostComponent: React.FC<Props> = ({
                                                 data,
                                               }) => {
  return (
    <View style={{ padding: 4, backgroundColor: "#eee", borderRadius: 4 }}>
      <View style={[style.root, appStyle.shadow_1]}>
        <UserTitle
          userName={data.user.username}
          title={data.user.name}
          avt={data.user.profile_image.small}
        />
        <View style={{ width: "100%", maxHeight: 600 }}>
          <Image
            style={style.image}
            source={{ uri: data.urls.regular }} />
        </View>
        <UserStatus
        />
      </View>
    </View>
  );
};

interface UserProps {
  title: string,
  avt: string,
  userName: string
}

const UserTitle: FC<UserProps> = ({ title, avt, userName }) => {

  return (
    <View style={style.userTitleContainer}>
      <CircleImage radius={16}
                   uri={avt} />
      <View style={{ width: 4 }} />
      <View>
        <Text style={style.title}>{title}</Text>
        <Text style={style.subTitle}>{"@" + userName}</Text>
      </View>
    </View>
  );
};

interface StatusProp {
}

const UserStatus:FC<StatusProp> = () => {
  return (

    <View style={style.descriptionRoot}>
      <Download />
    </View>);
};

const Download = () => {
  return (
    <View style={{ width: "100%",backgroundColor:"red",justifyContent:"flex-end",alignSelf:"flex-end" }}>
      <View style={{
        alignItems: "center",
        borderRadius: 4,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignSelf: "baseline",
        padding: 4,
      }}>
        <Text style={{ fontSize: 16 }}>Download</Text>
        <View style={{ width: 8 }} />
        <Image style={style.download} source={ICON.DOWNLOAD} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    width: "100%",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    borderRadius: 4,
  },

  descriptionRoot: {
    width: "100%",
    padding: 8,
    flexDirection:"row"
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 4,
  },
  userTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 4,
    paddingBottom: 4,
  },
  title: {
    fontWeight: "700",
    fontSize: 16,
  },
  subTitle: {
    fontWeight: "300",
    fontSize: 14,
    marginTop: -4,
  },

  download: {
    width: 16,
    height: 16,
  },
});
