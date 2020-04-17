import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {MaterialIcons}    from '@expo/vector-icons';

export default function TodoItem({item,pressHandler}) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}> 
          <View style={styles.item}> 
          <MaterialIcons name="delete" size={18} color="coral"  />
          <Text style={styles.itemText}> 
                {item.text}
            </Text>
          </View>
           
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   item: {
       flexDirection:'row',
       padding:16,
       marginTop:16,
       borderColor : '#bbb',
       borderRadius:10,
       borderWidth:1,
       borderStyle: 'dashed'
   },
   itemText: {
   marginLeft:10
   }
});