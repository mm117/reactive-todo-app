import React,{useState} from 'react';
import { StyleSheet,View, Text, TextInput, Button } from 'react-native';

export  default function  AddTodo ({submitHandler}){ 
     const [todo,setTodo] = useState('');
     const ChangeHandler = (val) =>{
             setTodo(val);
     }
     
    return (
       <View> 
          <TextInput placeholder="enter the name of Todo" style={styles.input}  onChangeText={(val)=>ChangeHandler(val)}> </TextInput>
          <Button onPress={() => submitHandler(todo)}  color="coral" title="ADD TODO"/>
       </View> 
    )
}


const styles = StyleSheet.create({
    input:{
        borderBottomWidth:1,
        marginBottom:10,
        paddingVertical:6,
        paddingHorizontal:8,
        borderBottomColor : '#ddd'
    }
})