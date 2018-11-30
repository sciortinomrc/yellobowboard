import React, { Component } from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
export default class Button extends Component {
  render() {
    return (
      <View>
            <TouchableOpacity style={this.props.styling} onPress={this.props.actionOnPress}>
                   {this.props.children}
            </TouchableOpacity>
      </View>
    )
  }
}
