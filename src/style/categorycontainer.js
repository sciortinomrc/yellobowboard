import {StyleSheet,} from 'react-native'
import {width,height} from '../config/DeviceDimension'
export default CategoryContainerStyle=StyleSheet.create({
    container:{
        flex:1
    },
    searchStyle:{
        backgroundColor:'#FFDE83',
        height:height/12,
        backgroundColor:'#fff',
        flexDirection: 'row'
    },
    itemStyle:{
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    footerStyle:{
        flex:1,
        height:height/10,
        backgroundColor:'#1E0D65'
    },
    searchMarginStyle:{
        paddingLeft:width/1.6
    },
    searchTextInputStyle:{
        width:width/1.1,
        alignItems:'center',
        paddingTop:5,
        paddingLeft:width/50,
        height:height/20,
    },
    backgroundStyle:{
        flex:12
    },
    scrollText:{
        marginTop:height/40,
        fontSize:width/50+height/50,
        fontWeight:'600',
        marginLeft:width/14,
        fontFamily:'Roboto'
    },
    cardStyle:{
        height:height/5.2,
        width:width/2.6,
        marginLeft:width/15,
        marginTop:height/45,
        marginBottom:height/60,
        justifyContent:'center',
        alignItems:'center',
    },
    logoStyle:{
        height:height/11
        ,width:width/6
    },
    continueButtonStyle:{
        height:height/15,
        width:width,
        justifyContent:'center',
        alignItems:'center'

    },
    searchButtonStyle:{
        flex:1,
        width:width/5,
    }

})
