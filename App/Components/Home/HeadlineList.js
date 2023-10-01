import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import Colors from "../../Shared/Colors";
import { useNavigation } from "@react-navigation/native";

export default function HeadlineList({ newsList }) {
    //using navigation here pls look at it
    const navigation = useNavigation();
  return (
    <View>
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
             onPress={() => navigation.navigate("Read-News",{news:item})}
              style={{ marginTop: 10, display: "flex", flexDirection: "row" }}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={{ width: 130, height: 130, borderRadius: 10 }}
              />

              <View style={{ marginLeft: 10, marginRight: 135 }}>
                <Text
                  numberOfLines={4}
                  style={{ fontSize: 18, fontWeight: "bold" }}
                >
                  {item.title}
                </Text>
                <Text style={{ color: Colors.BLUE }}>{item?.source?.name}</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                height: 5,
                backgroundColor: Colors.LIGHT_PRIMARY,
                marginTop: 10,
                borderRadius: 50,
              }}
            ></View>
          </View>
        )}
      />
    </View>
  );
}
