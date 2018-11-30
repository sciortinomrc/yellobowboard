import React, { Component } from 'react'
import {View,Image,StyleSheet,Text} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {width,height} from '../config/DeviceDimension'
import Button from '../components/Button'
import {connect} from 'react-redux'
import {logout} from '../actions/auth'
import LikeScreen from '../views/LikeScreen'
import MagazineScreen from '../views/MagazineScreen'
const profileImage='https://scontent.fktm5-1.fna.fbcdn.net/v/t1.0-9/21686328_1861845470522975_7546851531078448716_n.jpg?_nc_cat=101&_nc_ht=scontent.fktm5-1.fna&oh=6b0630f70d63e94f3ee245500f18968b&oe=5C731DA7'
import {createMaterialTopTabNavigator} from 'react-navigation'
class ProfileScreen extends Component {
    singOut=async()=>{
        this.props.logout()
        !this.props.isLogin&&this.props.navigation.navigate('AuthLoading')
    }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.subFirstContainer}>
            <View style={styles.topIconContainerStyle}>
                      <Button actionOnPress={()=>alert('FUCK')}>
                           <Image source={require('../../assets/follow.png')} style={{width:width/15,height:height/26,marginHorizontal:8}}/>
                      </Button>
                      <Button actionOnPress={()=>alert('FUCK')}>
                         <Image source={require('../../assets/settings.png')} style={{width:width/16,height:height/26,marginHorizontal:8}}/>
                      </Button>
                <Button actionOnPress={()=>this.singOut()}>
                    <Icon name="ios-log-out" size={width/30+height/30} color={'#fff'} style={styles.topIconStyle}/>  
                </Button>
            </View>
            <View style={styles.pictureContainerStyle}>
                <Image source={{uri:profileImage}} style={styles.imageStyle}/>
                <Text style={{color:'#fff'}}>Suresh Tamang</Text>
            </View>
            <TopTabNavigator />    
          </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    subFirstContainer:{
        flex:1,
        height:height/5,
        backgroundColor:"#120A33"
    },
    topIconContainerStyle:{
        flexDirection:'row',
        justifyContent:'flex-end',
        margin:width/30
    },
    topIconStyle:{
        marginHorizontal:8
    },
    pictureContainerStyle:{
        justifyContent:'center',
        alignItems:'center'
    },
    imageStyle:{
        borderRadius:10,
        width:width/6,
        height:height/10
    },
})
const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin
    }
}
export default connect(mapStateToProps,{logout})(ProfileScreen)

//Tab Navigator Create
const TopTabNavigator=createMaterialTopTabNavigator(
    {
        Like:LikeScreen,
        Magazine:MagazineScreen
    },
    navigationOptions={
        tabBarOptions:{
            style:{
                backgroundColor: '#120A33'
            }
        }
    }
)