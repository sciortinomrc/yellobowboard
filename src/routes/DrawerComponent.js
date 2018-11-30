import React, { Component } from 'react'
import {
        View,
        Text,
        ImageBackground,
        ScrollView,
        Image,
        FlatList,
        SafeAreaView,
        TouchableOpacity
    } from 'react-native'
import {width,height} from '../config/DeviceDimension'
import {connect} from 'react-redux'
class DrawerComponent extends Component {
  render() {
    return (
        <SafeAreaView style={{flex:1}}>
        <ScrollView>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',height:height/3}}>
            <ImageBackground 
                    source={require('../../assets/background.png')}
                    style={{width:width,height:height/3,position:'absolute'}}
                    resizeMode='stretch'
            /> 
            <Image 
                    source={{uri:'https://scontent.fktm5-1.fna.fbcdn.net/v/t1.0-9/21686328_1861845470522975_7546851531078448716_n.jpg?_nc_cat=101&_nc_ht=scontent.fktm5-1.fna&oh=6b0630f70d63e94f3ee245500f18968b&oe=5C731DA7'}}
                    style={{height:height/8,width:width/4.5,borderRadius:12}}
                />
            <Text style={{color:"#000",fontWeight:'700'}}>Suresh Tamang</Text>
            <Text style={{color:"#000"}}>yourjaaa@gmail.com</Text>
            </View>
            <ImageBackground source={require('../../assets/bg_box.png')} style={{flex:1}}>
                <FlatList
                    data={this.props.categoryList}
                    keyExtractor={(item)=>item.name}
                    renderItem={({item})=>(
                           <TouchableOpacity
                                style={{
                                    flexDirection:'row',
                                    width:width/1.6,
                                    height:height/12,
                                    borderWidth:1,
                                    borderColor:"#FFDE03",
                                    borderRadius:8,
                                    padding:8,
                                    margin:8,
                                    alignItems:'center'
                                    }}
                                    onPress={()=>alert(item.name)}
                                    >
                                       <Image 
                                            source={item.logoImage} 
                                            style={{
                                                    width:width/15,
                                                    height:height/15,
                                                    marginLeft:width/15,
                                                    marginRight:width/15
                                                    }}
                                                resizeMode="contain"        
                                                    />
                                            <Text style={{color:'#fff',fontSize:18}}>{item.name}</Text>
                            </TouchableOpacity>   
                    )}
                />
           </ImageBackground>
        </ScrollView>
        </SafeAreaView>
    )
  }
}
mapStateToProps=(state)=>{
    return{
        categoryList:state.categoryFetch.category
    }
}
export default connect(mapStateToProps,null)(DrawerComponent);