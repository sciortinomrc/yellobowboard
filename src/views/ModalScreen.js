import React, { Component } from 'react'
import {View,Text,Modal} from 'react-native'
import Button from '../components/Button'
export default class ModalScreen extends Component {
  render() {
    return (
     <View>
         <Modal
            transparent={true}
            animationType={'slide'}
            visible={this.props.modalShown}
            onRequestClose={()=>alert('Modal Close')}
            >
            <View style={{margin:80}}>
                <View style={{backgroundColor:'red'}}>
                    <Text>FUCK</Text>
                    <Text>FUCK</Text>
                    <Text>FUCK</Text>
                    <Text>FUCK</Text>
                    <Text>FUCK</Text>
                    <Text>FUCK</Text>
                    <Text>FUCK</Text>
                    <Text>FUCK</Text>
                    <Text>FUCK</Text>
                    <Text>FUCK</Text>
                    <Button actionOnPress={()=>alert('Hello World')}>
                         <Text>Close Modal</Text>
                    </Button>
                </View>
            </View>
        </Modal>
     </View>
    )
  }
}
