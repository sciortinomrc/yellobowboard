import React,{Component} from 'react';
import {View,ImageBackground,Text,AsyncStorage} from 'react-native';
import Button  from '../components/Button'
import landingStyle from '../style/landing'
export default class Landing extends Component{
    constructor(){
        super()
        this.checkingToken()
    }
    
    checkingToken=async()=>{
        const userToken = await AsyncStorage.getItem('userToken')
        this.props.navigation.navigate(userToken?'App':'WelcomeAuthLoading')
    }
    render(){
        return( 
            <ImageBackground source={require('../../assets/landing_page.png')} style={landingStyle.backgroundStyle}>
                <View style={landingStyle.container}>
                    <View style={landingStyle.buttonContainer}>
                        <Button styling={landingStyle.buttonStyle}  actionOnPress={()=>this.props.navigation.navigate('Login')}>
                             <Text style={landingStyle.buttonTextStyle}>USER</Text>
                        </Button>
                        <Button styling={landingStyle.buttonStyle}  actionOnPress={()=>this.props.navigation.navigate('Login')}>
                             <Text style={landingStyle.buttonTextStyle}>PUBLISHER</Text>
                        </Button>
                    </View>
                    {this.props.children}
                </View>
            </ImageBackground>
        );
    }
}
