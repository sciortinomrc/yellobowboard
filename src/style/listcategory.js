import {
    StyleSheet,
    Dimensions
} from 'react-native'
import {width,height} from '../config/DeviceDimension'
export default listcategorystyle=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFF89'
    },
    searchStyle:{
        margin:8,
        height:height/14,
        flexDirection: 'row',
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    textInputStyle:{
        fontSize:width/50+height/50,
        justifyContent:'center',
        alignItems:'center',
        width:width/1.25,
        height:height/15
    },
    imageStyle:{
        height:height/5,
        width:width/2.8
    },
    rightContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:8,
        width:width/1.6
        },
    calenderHourStyle:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
        alignItems:'center'
    },
    categoryListStyle:{
        width:width/7,
        height:height/12,
        borderColor:'#1E0D65',
        borderWidth:1,
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:4
    }

})