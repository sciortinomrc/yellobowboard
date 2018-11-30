import React, { Component } from 'react'
import {View,Text,ScrollView,Image,ImageBackground} from 'react-native'
import Button from '../components/Button'
import EnterText from '../components/EnterText'
import CategoryContainerStyle from '../style/categorycontainer'
import Icon from 'react-native-vector-icons/Ionicons'
import {width,height} from '../config/DeviceDimension'
import {connect} from 'react-redux'
import {fetchAllCategory} from '../actions/allCategory'
import {modalOpen}  from '../actions/modalAction'
import SubCategoryModal from '../modals/SubCategoryModal'
class CategoryContainer extends Component {
    componentDidMount(){
        fetchAllCategory()
    }
    static navigationOptions={
        header:null,
    }    
    state={
        bgColor:'',
        listOfCategory:[],
        searchBox:false,
        showModel:false
    }
    searchBox=()=>{
            if(!this.state.searchBox){
                return(
                    <View  
                        style={{
                                flexDirection:'row',
                                justifyContent:'space-around',
                                alignItems:'center', 
                                paddingLeft: width/10,
                                paddingRight: width/20,
                                height:height/20
                                }}>
                            <View>
                                <Text style={{color:"#000",fontSize:16}}>Yellow Board</Text>
                            </View>
                            <Button actionOnPress={()=>this.setState({searchBox:true})} styling={CategoryContainerStyle.searchMarginStyle}>
                                    <Icon name="ios-search" size={28} />
                            </Button>
                    </View>
                )
            }else{
                return(
                <View 
                    style={{
                        marginVertical:4,
                        justifyContent:'center',
                        alignItems:'center'
                        }}>                    
                    <View style={{
                            width:width/1.05,
                            flexDirection:'row',
                            alignItems:'center',
                            borderColor:'#1E0D65',
                            borderWidth:2,
                            borderRadius:10
                            }}>
                        <EnterText
                            placeholderName="Seach for topics, sources people"
                            styling={listcategorystyle.textInputStyle}
                            lineUnder="transparent"
                            /> 
                        <Button actionOnPress={()=>alert('Helllo')}>
                            <Icon name="ios-search" size={28} style={{paddingLeft:4}} />
                        </Button>
                    </View>
                </View>
                )
            }
    }
    
    render() {
        return (
                <View style={CategoryContainerStyle.container}>
                    <ImageBackground source={require('../../assets/category_bg.png')} style={CategoryContainerStyle.backgroundStyle}>
                    
                    {/* Search Bar design */}
                    {this.searchBox()}

                    {/* Modal For Sub Category Listing */}
                    <SubCategoryModal/>
                    
                    {/* Body or Login of the category */}
                    <View style={{flex:1}}>
                         <ScrollView>
                            <Text style={CategoryContainerStyle.scrollText}>Select Categories...</Text>
                                <View style={CategoryContainerStyle.itemStyle}>
                                    {this.props.category.map((item,index)=>
                                        <Button key={index} actionOnPress={(item)=>this.props.modalOpen(index)}>
                                            <ImageBackground
                                                source={require('../../assets/technology.png')}
                                                key={index}
                                                style={CategoryContainerStyle.cardStyle}>
                                                    <View>
                                                        <Image source={item.logoImage} style={CategoryContainerStyle.logoStyle} resizeMode={'contain'}/>
                                                    </View>
                                                <Text>{item.name}</Text>
                                            </ImageBackground>
                                        </Button>
                                        )}
                                </View>
                        </ScrollView>
                    </View>
                    </ImageBackground>
                    
                    {/* Bottom Continue Bottom */}
                    <View style={CategoryContainerStyle.footerStyle}>
                        <Button 
                            actionOnPress={()=>this.props.navigation.navigate('Main')} 
                            styling={CategoryContainerStyle.continueButtonStyle}>
                            <Text style={{fontSize:25,color:'#fff'}}>
                                Continue
                            </Text>
                        </Button>
                    </View>
                </View>
        )
    }
}
mapStateToProps=(state)=>{
    return{
        category:state.categoryFetch.category
    }
}
export default connect(mapStateToProps,{fetchAllCategory,modalOpen})(CategoryContainer);