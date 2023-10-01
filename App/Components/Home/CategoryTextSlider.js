import { View, Text, FlatList, Touchable, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../Shared/Colors'

export default function CategoryTextSlider({selectCategory}) {
    const [active,setActive]=useState(1)

    const categoryList=[
        
        {
            id:1,
            name:'Latest',
        },
        {
            id:2,
            name:'World',
        },
        {
            id:3,
            name:'Bussiness',
        },
        {
            id:4,
            name:'Sports',
        },
        {
            id:5,
            name:'Life',
        },
        {
            id:6,
            name:'Movie',
        },

    ]

    const onCategoryClick=(id)=>{
        setActive(id)
    }

  return (
    <View style={{marginTop:20,}}>
      <FlatList 
      data={categoryList}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>(

        <TouchableOpacity onPress={()=> {onCategoryClick(item.id);selectCategory(item.name)} }>
            <Text style={ item.id==active? styles.selectText: styles.unselectText}>{item.name}</Text>
        </TouchableOpacity>
      )} />
    </View>
  )
}

const styles = StyleSheet.create({
        unselectText:{
            marginRight:10, fontSize:20, fontWeight:'bold',color:Colors.BLACK,
        },
        selectText:{
            marginRight:10, fontSize:20, fontWeight:'bold',color:Colors.BLUE,
        }


})