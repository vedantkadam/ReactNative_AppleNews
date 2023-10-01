import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Services/GlobalApi";
import Colors from "../../Shared/Colors";
import { useNavigation } from "@react-navigation/native";
import ReadNews from "../../Screens/ReadNews";

export default function TopHeadlineSlider({ newsList }) {
  //api call removed from here

  //using navigation here pls look at it
  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 15 }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={newsList}
        renderItem={({ item }) => (
          <TouchableOpacity
          //news.item --> imp
            onPress={() => navigation.navigate("Read-News",{news:item})}
            style={{ width: Dimensions.get("screen").width * 0.8 }}
          >
            <Image
              source={{ uri: item.urlToImage }}
              style={{
                height: Dimensions.get("screen").width * 0.7,
                borderRadius: 20,
                marginRight: 15,
              }}
            />
            <Text style={{ marginTop: 10, fontSize: 19, fontWeight: "bold" }}>
              {item.title}
            </Text>
            <Text style={{ marginTop: 5, fontSize: 15, color: Colors.BLUE }}>
              {item?.source.name}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View
        style={{
          height: 5,
          backgroundColor: Colors.LIGHT_PRIMARY,
          marginTop: 10,
          marginLeft: -140,
        }}
      ></View>
    </View>
  );
}
