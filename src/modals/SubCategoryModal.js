import React, { Component } from 'react'
import { Text, View,Modal,ScrollView,FlatList } from 'react-native'
import Button from '../components/Button'
import {connect} from 'react-redux'
import {modalClose} from '../actions/modalAction'
class SubCategoryModal extends Component {
  render() {
    console.log(this.props.category[this.props.indexFound])
    return (
        <Modal
            transparent={true}
            animationType={'slide'}
            visible={this.props.isModalOpen}
            onRequestClose={()=>!this.props.isModalOpen}
        >
        <View style={{margin:40,backgroundColor:'#E4E4E4',borderRadius:25}}>
        
        <ScrollView>
            <View style={{margin:20,justifyContent:'center',alignItems:'center'}}>
                <Text>Choose Sub Category</Text>
                <Button actionOnPress={()=>alert('FUCK')} styling={{justifyContent:'center',alignItems:'center',width:300,height:30,borderColor:'#0336FF',borderWidth:1,borderRadius:10,marginVertical:10}}>
                    <Text>IT</Text>
                </Button>
               
                 
                <Button actionOnPress={()=>this.props.modalClose()} styling={{justifyContent:'center',alignItems:'center',backgroundColor:'#021B80',width:300,height:30,}}>
                    <Text style={{color:'#fff'}}>Close Modal</Text>
                </Button>
            </View>
        </ScrollView>
              
               
        </View>
    </Modal>
    )
  }
}
const mapStateToProps = (state) => {
    return {
        isModalOpen: state.modalReducer.isModalOpen,
        category: state.categoryFetch.category,
        indexFound:state.modalReducer.data
    }
}
export default connect(mapStateToProps,{modalClose})(SubCategoryModal)