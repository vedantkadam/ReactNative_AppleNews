import { View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Services/GlobalApi'
import Colors from '../../Shared/Colors';

export default function TopHeadlineSlider() {
const[newsList,setNewsList]=useState([]);

 useEffect(() => {
    getTopHeadlines();

 },[])
    
const getTopHeadlines=async()=>{

    const result=(await GlobalApi.getTopHeadlines).data;
    console.log(result);
    setNewsList(result.articles)
}

  return (
    <View style={{marginTop:15}}>
  <FlatList
  horizontal
  showsHorizontalScrollIndicator={false}
  data={newsList}
  renderItem={({item})=>(
<TouchableOpacity style={{width:Dimensions.get('screen').width*0.80}}>
    <Image source={{uri:item.urlToImage}}
    style={{height:Dimensions.get('screen').width*0.77,borderRadius:20,marginRight:15}}
    />
    <Text style={{marginTop:10,fontSize:22,fontWeight:'900'}}>{item.title}</Text>
    <Text style={{marginTop:5,fontSize:15,color:Colors.BLUE}}>{item?.source.name}</Text>
</TouchableOpacity>
  )}
  />
    </View>
  )
}