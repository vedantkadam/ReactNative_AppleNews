import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
  Button,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Colors from "../Shared/Colors";
import * as WebBrowser from "expo-web-browser";

export default function ReadNews() {
  const news = useRoute().params.news;
  const navigation = useNavigation();

  useEffect(() => {
    console.log(news);
  }, []);

  //sharing news
  const shareNews = () => {
    Share.share({
      message: news.title + "\n Read More" + news.description,
    });
  };

  return (
    <View style={{ backgroundColor: Colors.WHITE, flex: 1 }}>
      <View
        style={{
          marginTop: 10,
          marginBottom: 15,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left-circle" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => shareNews()}>
          <Entypo name="share" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: news.urlToImage }}
        style={{ width: "100%", height: 300, borderRadius: 15 }}
      />

      <Text style={{ marginTop: 25, fontSize: 22, fontWeight: "bold" }}>
        {news.title}
      </Text>
      <Text style={{ marginTop: 10, color: Colors.BLUE, fontSize: 16 }}>
        {news.source.name}
      </Text>
      <Text
        style={{
          marginTop: 10,
          fontSize: 16,
          color: Colors.DARK_GRAY,
          lineHeight: 30,
        }}
      >
        {news.description}
      </Text>

      <TouchableOpacity
        onPress={() => WebBrowser.openBrowserAsync(news.url)}
      >
        <Text
          style={{
            marginTop: 10,
            color: Colors.BLUE,
            fontSize: 16,
            fontWeight: "bold",
          }}
         
        >Read More</Text>
      </TouchableOpacity>
    </View>
  );
}
