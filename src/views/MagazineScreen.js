import React, { Component } from 'react'
import {View,Text,StyleSheet,FlatList,ImageBackground} from 'react-native'
import {width,height} from '../config/DeviceDimension'
const magazineList=[
    {
        name:'Kritipur',
        image:require('../../assets/annapurna.jpg')
    },
    {
        name:'Annapurna',
        image:require('../../assets/kantipur.jpg')        
    },
    {
        name:'Kritipur',
        image:require('../../assets/annapurna.jpg')
    },
    {
        name:'Annapurna',
        image:require('../../assets/kantipur.jpg')        
    },
    {
        name:'Kritipur',
        image:require('../../assets/annapurna.jpg')
    },
    {
        name:'Annapurna',
        image:require('../../assets/kantipur.jpg')        
    },
    {
        name:'Kritipur',
        image:require('../../assets/annapurna.jpg')
    },
    {
        name:'Annapurna',
        image:require('../../assets/kantipur.jpg')        
    },
    {
        name:'Annapurna',
        image:require('../../assets/kantipur.jpg')        
    },
]
export default class MagazineScreen extends Component {
  
  render() {
    return (
        <ImageBackground source={require('../../assets/profile_bg.png')} style={{flex:1}}>
        <View style={styles.container}>
            <FlatList
                data={magazineList}
                numColumns={3}
                keyExtractor={(item)=>item.image}
                renderItem={({item})=>{
                    return(
                        <View style={{padding:width/80+height/100}}>
                            <View>
                                <ImageBackground source={item.image} style={{height:height/5,width:width/3.8}} borderRadius={10}>
                                    <View style={{opacity: 0.6,alignItems:'center',justifyContent:'flex-end',backgroundColor:'#FC4444',borderTopEndRadius:10,borderTopLeftRadius:10}}>
                                        <Text style={{color:'#fff',borderRadius:10}}>{item.name}</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                        </View>
                    )
                }}
            />
        </View>   
        </ImageBackground> 
    )
  }
}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems:'center'
    }, 
})