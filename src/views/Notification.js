import React, { Component } from 'react'
import {View,Text,StyleSheet,FlatList,Image} from 'react-native'
import Button from '../components/Button'
import {width,height} from '../config/DeviceDimension'
import Icon from 'react-native-vector-icons/Ionicons'
const notificationList=[
  {
    image:'https://scontent.fktm5-1.fna.fbcdn.net/v/t1.0-9/21615974_1861845570522965_557548279408104889_n.jpg?_nc_cat=100&_nc_ht=scontent.fktm5-1.fna&oh=6c4e6ef26602b455c4be90e954a19b7c&oe=5C75AC6E',
    description:'Suresh Tamang liked your status.Suresh Tamang liked your status.Suresh Tamang liked your status.'
  },
  {
    image:'https://scontent.fktm5-1.fna.fbcdn.net/v/t1.0-9/21615974_1861845570522965_557548279408104889_n.jpg?_nc_cat=100&_nc_ht=scontent.fktm5-1.fna&oh=6c4e6ef26602b455c4be90e954a19b7c&oe=5C75AC6E',
    description:'Suresh Tamang liked your status.Suresh Tamang liked your status.Suresh Tamang liked your status.'
  },
  {
    image:'https://scontent.fktm5-1.fna.fbcdn.net/v/t1.0-9/21615974_1861845570522965_557548279408104889_n.jpg?_nc_cat=100&_nc_ht=scontent.fktm5-1.fna&oh=6c4e6ef26602b455c4be90e954a19b7c&oe=5C75AC6E',
    description:'Suresh Tamang liked your status.'
  },
  {
    image:'https://scontent.fktm5-1.fna.fbcdn.net/v/t1.0-9/21615974_1861845570522965_557548279408104889_n.jpg?_nc_cat=100&_nc_ht=scontent.fktm5-1.fna&oh=6c4e6ef26602b455c4be90e954a19b7c&oe=5C75AC6E',
    description:'Suresh Tamang liked your status.'
  },
  {
    image:'https://scontent.fktm5-1.fna.fbcdn.net/v/t1.0-9/21615974_1861845570522965_557548279408104889_n.jpg?_nc_cat=100&_nc_ht=scontent.fktm5-1.fna&oh=6c4e6ef26602b455c4be90e954a19b7c&oe=5C75AC6E',
    description:'Suresh Tamang liked your status.Suresh Tamang liked your status.Suresh Tamang liked your status.Suresh Tamang liked your status.'
  },
  {
    image:'https://scontent.fktm5-1.fna.fbcdn.net/v/t1.0-9/21615974_1861845570522965_557548279408104889_n.jpg?_nc_cat=100&_nc_ht=scontent.fktm5-1.fna&oh=6c4e6ef26602b455c4be90e954a19b7c&oe=5C75AC6E',
    description:'Suresh Tamang liked your status.'
  }
]
export default class Notification extends Component {
  renderItemList=()=>(
      <FlatList
                    data={notificationList}
                    keyExtractor={(item)=>item.image}
                    renderItem={({item})=>
                        (
                            <View>
                              <View style={{flexDirection:'row',padding:8}}>
                                    <Image source={{uri:`${item.image}`}} style={{width:width/6,height:height/8}}/>
                                    <Text style={{flex:1,color:'#fff',marginHorizontal:6}}>{item.description}</Text>
                              </View>
                            </View>
                          )
                    }
                />
  )
  renderNoItem=()=>(
    <View style={{marginHorizontal:8,marginTop:width/15}}>
      <Text 
          style={{
            color:'#9D9D00',
            fontSize:width/22+height/22,
            justifyContent:'center',
            alignItems:'center',
            fontFamily:'Roboto',
            fontWeight:'700'
            }}>
            There is no any notification
        </Text>
      <Text style={{color:'#fff'}}>Follow magazine, people or stories to get started.</Text>
    </View>
  )
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                  <View style={{marginHorizontal:width/15}}>
                        <Text style={{color:'#fff',fontSize:width/35+height/35,fontWeight:'800'}}>Notification</Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                      <Button actionOnPress={()=>alert('FUCK')}>
                           <Image source={require('../../assets/follow.png')} style={{width:width/12,height:height/22,margin:width/20}}/>
                      </Button>
                      <Button actionOnPress={()=>alert('FUCK')}>
                         <Image source={require('../../assets/settings.png')} style={{width:width/13,height:height/20,margin:width/20}}/>
                      </Button>
                  </View>
            </View>
            <View style={{marginHorizontal:width/25,marginBottom:height/10}}>
                { 
                  notificationList.length!==0
                    ?
                    this.renderNoItem()
                    :
                    this.renderItemList()
                }
            </View>
        </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#345576"
  },
  header:{
    width:width,
    height:height/12,
    backgroundColor:'#021B80',
    flexDirection:'row',
    alignItems:'center',
    justifyContent: "space-between",
  }
})