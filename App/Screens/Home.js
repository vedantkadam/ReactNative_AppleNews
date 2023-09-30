import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import Colors from '../Shared/Colors';
import { FontAwesome5 } from '@expo/vector-icons'; 
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider';

export default function Home() {
  return (
    <View >

        <View style={{display:'flex', flexDirection:'row' , justifyContent:'space-between', alignItems:'center'}}>
        <Text style={styles.title} >Vedant Kadam News</Text>
        <FontAwesome5 name="bell" size={24} color="black" />
        </View>
        
        <CategoryTextSlider/>
        {/* //TopHeadlineSlider */}
        <TopHeadlineSlider/>
     
    </View>
  )
}

const styles = StyleSheet.create({
    title: {

     fontSize:24,
     fontWeight:'600',
     color:Colors.BLUE,
    
    },
  });
  