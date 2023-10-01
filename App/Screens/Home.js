import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import Colors from '../Shared/Colors';
import { FontAwesome5 } from '@expo/vector-icons'; 
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import HeadlineList from '../Components/Home/HeadlineList';
import GlobalApi from '../Services/GlobalApi';

export default function Home() {

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
    <ScrollView >

        <View style={{display:'flex', flexDirection:'row' , justifyContent:'space-between', alignItems:'center'}}>
        <Text style={styles.title} >Vedant Kadam News</Text>
        <FontAwesome5 name="bell" size={24} color="black" />
        </View>
        
        <CategoryTextSlider/>
        {/* //TopHeadlineSlider */}
        <TopHeadlineSlider newsList={newsList}/>
        <HeadlineList newsList={newsList}/>
     
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    title: {
     marginTop:20,
     fontSize:24,
     fontWeight:'600',
     color:Colors.BLUE,
    
    },
  });
  