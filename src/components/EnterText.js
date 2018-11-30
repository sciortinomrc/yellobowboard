import React, { Component } from 'react'
import {View,TextInput} from 'react-native'
export default class EnterText extends Component {
  render() {
    return (
      <View>
            <TextInput 
                      style={this.props.styling} 
                      underlineColorAndroid={this.props.lineUnder} 
                      placeholder={this.props.placeholderName} 
                      onChangeText={(text)=>this.setState({email:text})}
                      secureTextEntry={this.props.secureText} 
                      placeholderTextColor={this.props.colorPlaceholder}
                      onFocus={this.props.focus}
                      onBlur={this.props.blur}
                      multiline={this.props.line}
                      numberOfLines={this.props.number}
            >
            </TextInput>
      </View>
    )
  }
}
