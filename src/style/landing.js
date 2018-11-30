import {StyleSheet,Dimensions} from 'react-native'
import {width,height} from '../config/DeviceDimension'
export default landingStyle=StyleSheet.create({
    container:{
        flex:1,
    },
    buttonContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        marginTop:height/1.8
    },
    buttonStyle:{
        borderRadius:10,
        height:height/12,
        width:width/1.3,
        margin:height/60,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#9D9D00',
    },
    buttonTextStyle:{
        color:'#fff',
        fontSize:width/40+height/80,
        
    },
    bottomStyle:{
        flex:1,
        backgroundColor:'#898976',
        justifyContent:'center',
        alignItems:'center'
    },
    backgroundStyle:{
        flex:1
    }
    
})
