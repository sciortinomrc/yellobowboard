import React, { Component } from 'react'
import {View,Text,StyleSheet,ImageBackground,FlatList} from 'react-native'
import {width,height} from '../config/DeviceDimension'
const response =[
    {
        "date":"29 Oct",
        "news":"Google supports small-scale journalism with free G Suite licenses.",
    },
    {
        "date":"30 Oct",
        "news":"Scientists prove technology has adverse psychological effects on children.",
    },
    {
        "date":"31 Oct",
        "news":"Spinner Lamichhane hits $30,000 T10 jackpot.",
    },
    {
        "date":"1 Nov",
        "news":"Nepal out to give their best against mighty India.",
    },
    {
        "date":"2 Nov",
        "news":"Bimstec Summit: Leaders agree on regional power grid.",
    },
    {
        "date":"3 Nov",
        "news":"Microsoft to launch new windows phone next year.",
    },
    {
        "date":"29 Oct",
        "news":"Google supports small-scale journalism with free G Suite licenses.",
    },
    {
        "date":"30 Oct",
        "news":"Scientists prove technology has adverse psychological effects on children.",
    },
    {
        "date":"31 Oct",
        "news":"Spinner Lamichhane hits $30,000 T10 jackpot.",
    },
    {
        "date":"1 Nov",
        "news":"Nepal out to give their best against mighty India.",
    },
    {
        "date":"2 Nov",
        "news":"Bimstec Summit: Leaders agree on regional power grid.",
    },
    {
        "date":"3 Nov",
        "news":"Microsoft to launch new windows phone next year.",
    },
  
   
  ];
export default class LikeScreen extends Component {
  render() {
    return(
        <ImageBackground source={require('../../assets/tabNavigator.png')} style={{flex:1,}}>
            <FlatList
                data={response}
                renderItem={({item})=>(
                    <View style={styles.itemContainerStyle}>
                       <ImageBackground 
                            source={require('../../assets/gradient.png')} 
                            style={styles.dateStyle} 
                            borderRadius={8}>
                            <Text style={{color:"#fff",fontSize:18}}>{item.date}</Text>
                       </ImageBackground>
                       <View style={styles.detailStyle}>
                            <Text style={{color:"#fff"}}>{item.news}</Text>
                       </View>
                    </View>
                )
                }
                keyExtractor={(item)=>item.date}
            />
        </ImageBackground>
    )
  }
}
const styles=StyleSheet.create({
    itemContainerStyle:{
        flexDirection:'row',
        alignItems: 'center',
        height:height/10,
        borderWidth:1,
        borderColor:'#FFDE03',
        borderRadius: 10,
        margin:8
    },
    dateStyle:{ 
        height:height/10.5,
        width:width/6,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    },
    detailStyle:{
        margin:8,
        padding:8,
        flex:1
    }
})
