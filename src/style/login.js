import {StyleSheet} from 'react-native'
import {width,height} from '../config/DeviceDimension'
export default loginStyle=StyleSheet.create({
    container:{
        flex:1
    },
    containerPart:{
        flex:1
    },
    inputTextStyle:{
        height:height/12,
        width:width/1.3,
        borderRadius:10,
        backgroundColor:'#626200',
        justifyContent:'center',
        marginBottom:height/40,
        alignItems:'center',
        paddingLeft:width/20,
        color:'#fff',
        fontSize:width/30+height/105
        
    },
    loginStyle:{
        height:height/12,
        width:width/2,
        borderColor:'#000000',
        borderWidth:2,
        borderRadius:16,
        justifyContent:'center',
        alignItems:"center",
    },
    socialSite:{
        flexDirection: 'row',
        height:height/12,
        width:width/1.3,
        backgroundColor:'#D13024',
        borderRadius:10,
        marginTop:height/40,
        alignItems:'center',
        padding:width/60+height/60
    },
    backgroundStyle:{
        width: width,
        height: height,
        marginTop:height/40
    },
    inputTextContainer:{
        marginTop:height/10,
        justifyContent: 'center',
        alignItems:'center',
    },
    backgroundStyle:{
        flex:1
    },
    socialSiteStyle:{
        justifyContent:'center',
        alignItems:'center',
        paddingTop:height/9
    },
    socialSiteStyleText:{
        color:'#fff',
        fontSize:width/50+height/50
    },
    loginButtonTextStyle:{
        color:'#000',
        fontSize:width/100+height/40,
        fontFamily:'monospace'
    },
    socialIconStyle:{
        width:width/10
    },
    socialTextContainerStyle:{
        marginLeft:-(width/10),
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})