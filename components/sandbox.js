import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList,Alert,TouchableWithoutFeedback, Keyboard } from 'react-native';

export default  function SandBox(){
    return (
     <View style={styles.container}> 
         <Text style={styles.boxone}> One</Text>
         <Text style={styles.boxtwo}> Two</Text>
         <Text style={styles.boxthree}> Three</Text>
         <Text style={styles.boxfour}> Four</Text>
     </View>
    )
}



const styles = StyleSheet.create({
      container: { 
        //   flex:1,
          paddingTop: 40,
          backgroundColor: '#ddd',
          flexDirection:'row'
      },
      boxone: {
     backgroundColor : 'coral',
       padding: 10
      },
    boxthree: {
        backgroundColor: 'red',
        padding: 10
    },
    boxtwo: {
        backgroundColor: 'black',
        padding: 10
    },
    boxfour: {
        backgroundColor: 'blue',
        padding: 10
    }
})