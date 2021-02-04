//import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

/*const styles = () => {
    return (
        <View>
            <Text></Text>
        </View>
    )
}*/



const styles = StyleSheet.create({

    carContainer:{

        width:'100%',
        height:'100%'
    
    
      },
      titles:{
        marginTop:'30%',
        width:'100%',
        alignItems:'center'
    
      },
      title:{
        color:'white',
        fontSize:40,
        fontWeight:'bold'
    
      },
      subtitle:{
        fontSize:16,
        color:'#5c5e62'
    
      },
      images:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute'
      }
});
export default styles;
