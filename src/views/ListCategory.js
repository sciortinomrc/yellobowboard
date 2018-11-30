import React, { Component } from 'react'
import {
        View,
        Text,
        FlatList,
        ScrollView,
        Image,
    } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'
import  Button from '../components/Button'
import EnterText from '../components/EnterText'
import  listcategorystyle from '../style/listcategory'
import {width,height} from '../config/DeviceDimension'
const iconStyle=width/28+height/28
const itemList=[
    {
        id:1,
        name:'Technology',
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s",
        time:"2 hours",
        dates:'4/4/1993',
        src:require("../../assets/g837.png")
    },
    {
        id:2,
        name:'Eduction',
        src:require("../../assets/business.png"),
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s",
        time:"2 hours",
        dates:'4/4/1993',
    },
    {
        id:3,
        name:'Technolog',
        src:require("../../assets/entertainment.png"),
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s",
        time:"2 hours",
        dates:'4/4/1993',
    },
    {
        id:4,
        name:'Technologye',
        src:require("../../assets/Group76.png"),
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s",
        time:"2 hours",
        dates:'4/4/1993',
    },
    {
        id:5,
        name:'Technologys',
        src:require("../../assets/politicsicon(1).png"),
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s",
        time:"2 hours",
        dates:'4/4/1993',
    },
    {
        id:6,
        name:'Technologyah',
        src:require("../../assets/sports.png"),
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s",
        time:"2 hours",
        dates:'4/4/1993',
    },
    {
        id:7,
        name:'Technologyl',
        src:require("../../assets/techicon(1).png"),
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s",
        time:"2 hours",
        dates:'4/4/1993',
    },
    {
        id:8,
        name:'Technologyw',
        src:require("../../assets/travel.png"),
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s",
        time:"2 hours",
        dates:'4/4/1993',
    },
    {
        id:9,
        name:'Technologyq',
        src:require("../../assets/weather.png"),
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s",
        time:"2 hours",
        dates:'4/4/1993',
    }


];  
export default class ListCategory extends Component {
  render() {
    return (
    
            <View style={listcategorystyle.container}>
                <View style={listcategorystyle.searchStyle}>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',borderColor:'#1E0D65',borderWidth:2,borderRadius:10}}>
                        <Icon name="ios-search" size={iconStyle} style={{paddingLeft:4}} />
                        <EnterText
                            placeholderName="Seach for topics, sources people"
                            styling={listcategorystyle.textInputStyle}
                            lineUnder="transparent"
                            /> 
                    </View>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:"flex-start",marginBottom:4}}>
                    <Button actionOnPress={()=>this.props.navigation.openDrawer()}>
                        <Icon name="ios-menu" size={iconStyle} style={{marginHorizontal:6}} />
                    </Button>
                    <View>
                        <FlatList
                            horizontal={true}   
                            data={itemList}
                            keyExtractor={(item)=>item.name}
                            renderItem={({item})=>(
                            <Button actionOnPress={()=>alert(item.name)}>
                                <View style={listcategorystyle.categoryListStyle}>
                                <Image source={item.src} style={{height:height/20,width:width/10}} resizeMode="contain"/>   
                                </View>
                            </Button>
                        )}
                        />
                    </View>
                </View>
                <ScrollView style={{marginTop:height/50}}>
                   <View>
                       <FlatList
                            data={itemList}
                            keyExtractor={(item, index) => item.name}
                            renderItem={({item,index})=>{
                                return(
                                    <View>
                                    <Button 
                                            key={index} 
                                            styling={{
                                            flexDirection:'row',
                                            backgroundColor:'#989859',
                                            padding:8
                                            }} 
                                            actionOnPress={()=>this.props.navigation.navigate('Detail')}
                                            >
                                        <Image key={index} source={item.src} style={listcategorystyle.imageStyle}/>
                                        <View style={listcategorystyle.rightContainer}>
                                            <Text>{item.description}</Text>
                                            <View style={{
                                                marginTop:10,
                                                flexDirection:'row',
                                                justifyContent:'space-between',
                                                flex:1,
                                                alignItems:'center'}}>
                                               <View style={{flexDirection:'row',marginRight:8}}>
                                                    <Icon name="ios-calculator" size={24} style={{paddingRight:8}} color="#fff"/>
                                                    <Text style={{color:'#fff'}}>{item.dates}</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Icon name="ios-time" size={24} style={{paddingRight:8}} color="#fff"/>
                                                    <Text style={{color:'#fff'}}>{item.time}</Text>
                                                </View>
                                            </View>
                                        </View>

                                    </Button>
                                    <View style={{borderWidth:1,borderColor:'#000',marginTop:5,marginBottom:5}}></View>
                                    </View>
                                )
                            }}
                       />
                   </View>
                </ScrollView>
            </View>
    )
  }
}
