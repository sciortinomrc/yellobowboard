import React, { Component } from 'react'
import {View,Text,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EnterText from '../components/EnterText'
import {width,height} from '../config/DeviceDimension'
import Button from '../components/Button'
import loginStyle from '../style/login'
import {connect} from 'react-redux'
import {login} from '../actions/auth'
const iconSize=width/30+height/30
class Login extends Component {
    static navigationOptions = {
        header: null,
    }
    state={
        email:'',
        password:'',
        inputTextBackgroundColor:'#626200'
    }
    onFocus() {
        this.setState({
            inputTextBackgroundColor: 'green'
        })
      }

    onBlur() {
        this.setState({
          inputTextBackgroundColor: '#626200'
        })
      }
    loginFunction(){
        this.props.login(this.state.email,this.state.password)
        this.props.isLogin && this.props.navigation.navigate('App')
    }
  render() {
      console.log(this.props.reduxState)
    return (
    <ImageBackground source={require('../../assets/login.png')}  style={loginStyle.backgroundStyle} >
   
      <View style={loginStyle.container}>
      
          <View style={loginStyle.containerPart}>
                
                <View style={loginStyle.inputTextContainer}>
                    <EnterText
                         focus={()=>this.onFocus()}
                         blur={()=>this.onBlur()}
                         styling={[loginStyle.inputTextStyle,{backgroundColor:this.state.inputTextBackgroundColor}]} 
                         lineUnder="transparent" 
                         placeholderName="Email" 
                         action={(text)=>this.props.email}
                         colorPlaceholder="#fff"
                         >
                    </EnterText>
                    <EnterText 
                        focus={()=>this.onFocus()}
                        blur={()=>this.onBlur()}
                        styling={[loginStyle.inputTextStyle,{backgroundColor:this.state.inputTextBackgroundColor}]} 
                        lineUnder="transparent" 
                        placeholderName="password"
                        action={(text)=>this.props.password}
                        secureText={true} 
                        colorPlaceholder="#fff"
                    >                        
                    </EnterText>
                    <Button styling={loginStyle.loginStyle} actionOnPress={()=>this.loginFunction()}>
                         <Text style={loginStyle.loginButtonTextStyle}>Login</Text>
                    </Button>
                </View>
                
          </View>
        
          <View style={loginStyle.containerPart}>
         
               <View style={loginStyle.socialSiteStyle}>
                    <Button styling={[loginStyle.socialSite]} actionOnPress={()=>alert('google')}>
                       <View style={loginStyle.socialIconStyle}>
                            <Icon name="logo-google" size={iconSize} color="#fff"/>
                       </View>
                       <View style={loginStyle.socialTextContainerStyle}>
                            <Text style={loginStyle.socialSiteStyleText}>   
                                Google
                            </Text>
                        </View>
                    </Button>
                    <Button styling={[loginStyle.socialSite,{backgroundColor:'#2E4984'}]} actionOnPress={()=>alert('google')}>
                        <View style={loginStyle.socialIconStyle}>
                            <Icon name="logo-facebook" size={iconSize} color="#fff"/>
                        </View>
                        <View style={loginStyle.socialTextContainerStyle}>
                             <Text  style={loginStyle.socialSiteStyleText}>Facebook</Text>
                        </View>
                    </Button>
                    <Button styling={[loginStyle.socialSite,{backgroundColor:'#0E7EC4'}]} actionOnPress={()=>alert('google')}>
                        <View style={loginStyle.socialIconStyle}>
                            <Icon name="logo-twitter" size={iconSize} color="#fff"/>
                        </View>
                        <View style={loginStyle.socialTextContainerStyle}>
                            <Text  style={loginStyle.socialSiteStyleText}>Twitter</Text>
                        </View>
                    </Button>
                </View>
          </View>
      </View>
      </ImageBackground>
    )
  }
}

mapStateToProps=(state)=>{
    return{
        reduxState:state.auth,
        email:state.auth.email,
        password:state.auth.password,
        isLogin:state.auth.isLogin
    }
}

export default connect(mapStateToProps,{login})(Login);