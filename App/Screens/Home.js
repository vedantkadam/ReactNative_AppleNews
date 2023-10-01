import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import Colors from '../Shared/Colors';
import { FontAwesome5 } from '@expo/vector-icons'; 
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';
import HeadlineList from '../Components/Home/HeadlineList';
import GlobalApi from '../Services/GlobalApi';

export default function Home() {

  const[newsList,setNewsList]=useState([]);
  const[loading,setLoading]=useState(true);

 useEffect(() => {
    // getTopHeadlines();

    getByCategory('latest');

 },[])
    
const getByCategory=async(category)=>{
    setLoading(true);

    const result=(await GlobalApi.getByCategory(category)).data;
    console.log(result);
    setNewsList(result.articles)
    setLoading(false);
}
  return (
    
    <ScrollView style={{backgroundColor:Colors.WHITE}} >

        <View style={{display:'flex', flexDirection:'row' , justifyContent:'space-between', alignItems:'center'}}>
        <Text style={styles.title} >Vedant Kadam News</Text>
        <FontAwesome5 name="bell" size={24} color="black" />
        </View>
        
        <CategoryTextSlider selectCategory={(category)=>getByCategory(category)}/>
        {loading?<ActivityIndicator size={'large'} color={Colors.BLUE}/>:
<View>
        {/* //TopHeadlineSlider */}
        <TopHeadlineSlider newsList={newsList}/>
        <HeadlineList newsList={newsList}/>
        </View>
  }
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
  