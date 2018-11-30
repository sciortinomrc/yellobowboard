import React, { Component } from 'react'
import {
        View,
        Text,
        ScrollView,
        Image,
        } from 'react-native'
import  Button from '../components/Button'
import EnterText from '../components/EnterText'
import DetailCategoryStyle  from '../style/detailcategory'
import {width,height} from '../config/DeviceDimension'
const iconSize=width/40+height/40
import Icon from 'react-native-vector-icons/Ionicons'
const detail=[
        {title:'Google supports small-scale journalism with free G Suite License',
        img:"https://images.pexels.com/photos/87469/rose-blossom-bloom-red-rose-87469.jpeg?auto=compress&cs=tinysrgb&h=350",
        dates:"04/23/1993",
        times:"14 hours ago",
        description:"Porem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a typ specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the ",
    }
]
export default class DetailCategory extends Component {
    static navigationOptions = {
       
        headerRight: (
            <View style={{flexDirection:'row',marginRight:8,justifyContent:'center',alignItems:'center'}}>
                <Button actionOnPress={()=>alert('SUCK')}>
                    <Image source={require('../../assets/share.png')} style={DetailCategoryStyle.rightIconsStyle} resizeMode="center"/>
                </Button>
                <Button actionOnPress={()=>alert('SUCK')}>
                    <Image source={require('../../assets/comment.png')} style={DetailCategoryStyle.rightIconsStyle} resizeMode="center"/>
                </Button>
                <Button actionOnPress={()=>alert('SUCK')}>
                    <Image source={require('../../assets/add.png')} style={DetailCategoryStyle.rightIconsStyle} resizeMode="center"/>
                </Button>
                <Button actionOnPress={()=>alert('SUCK')}>
                    <Image source={require('../../assets/more.png')} style={{width:width/50,height:height/20}} resizeMode="center"/>
                </Button>
            </View>
        ),
      };   
  render() {
    return (
      <View style={DetailCategoryStyle.container}>
        <ScrollView>
          {detail.map((item,i)=>
            <View key={i}>
                <Text  style={{fontSize:25,fontWeight:"200",padding:width/40,flex:1}}>{item.title}</Text>
                <Image source={{uri:item.img}} style={DetailCategoryStyle.logoStyle}/>
                <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                    <View style={{flexDirection:'row',margin:8,padding:8}}>
                        <Icon name="ios-calculator" size={iconSize} style={DetailCategoryStyle.rightIconsStyle}/>
                        <Text>{item.dates}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Icon name="ios-time" size={iconSize} style={DetailCategoryStyle.rightIconsStyle}/>
                        <Text>{item.times}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                        <Icon name="logo-google" size={iconSize} color="red" style={DetailCategoryStyle.rightIconsStyle}/>
                        <Icon name="logo-twitter" size={iconSize} color="#55ACEE" style={DetailCategoryStyle.rightIconsStyle}/>
                        <Icon name="logo-facebook" size={iconSize} color="#2E4984" style={DetailCategoryStyle.rightIconsStyle}/>
                </View>
                <View style={{padding:8}}>
                        <View style={DetailCategoryStyle.lineStyle}></View>
                        <View style={DetailCategoryStyle.textConatinerStyle}>
                            <Text>{item.description}</Text>
                            <View style={DetailCategoryStyle.socialLogoStyle}>
                                    <Text>Google adds</Text>
                            </View>
                            <Text>{item.description}</Text>
                            <View style={DetailCategoryStyle.socialLogoStyle}>
                                    <Text>Google adds</Text>
                            </View>
                            <Text>{item.description}</Text>
                            <Text>{item.description}</Text>
                            <Text>{item.description}</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:10}}>
                            <View style={[DetailCategoryStyle.tagsStyle,{width:width/8,backgroundColor:"#626200",height:height/iconSize}]}>
                                <Text style={{color:'#fff',fontSize:14}}>Tags</Text>
                            </View>
                            <View style={DetailCategoryStyle.tagsStyle}><Text >Tags</Text></View>
                            <View style={DetailCategoryStyle.tagsStyle}><Text>Tags</Text></View>
                            <View style={DetailCategoryStyle.tagsStyle}><Text>Tags</Text></View>
                            <View style={DetailCategoryStyle.tagsStyle}><Text>Tags</Text></View>
                    
                        </View>
                        <View style={DetailCategoryStyle.lineStyle}></View>
                        <View style={{ justifyContent:'center', alignItems:'center',}}>
                            <View style={DetailCategoryStyle.commentStyle}>
                                <Text style={{fontWeight:'800'}}>Comments</Text>
                            </View>
                        </View>
                        <EnterText 
                                lineUnder="transparent" 
                                placeholderName="Commet here" 
                                styling={DetailCategoryStyle.commentInputStyle}
                                line={true}
                                number={5}
                                />
                        <Button styling={DetailCategoryStyle.commentSendStyle} actionOnPress={()=>alert('Send')}><Text style={{color:'#fff'}}>Send</Text></Button>
                </View>
  
            </View>
            )}
            </ScrollView>
      </View>
    )
  }
}
