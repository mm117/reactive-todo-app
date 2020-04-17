import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList,Alert,TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {
   const [todos,setTodos] = useState([
      {text:'buy coffee', key: '1'},
      {text:'Create an app', key: '2'},
      {text:'Play on Switch', key: '3'},

   ])
    const pressHandler = (key) => {
         setTodos(prevTodos => {
          return prevTodos.filter(todo => todo.key != key);
         })
    }
     const submitHandler = (item) =>{
       if(item.length > 3) {
        setTodos(prevTodos => {
          return [ {text:item,key:Math.random().toString()}, ...prevTodos ]
         })
       } else{
         Alert.alert('OOPS!', 'Todos must be over 3 chars long',[
           {
             text:'Understood', onPress: () => console.log('alert closed')
           }
         ])
       }
        
     }
  return (
    <TouchableWithoutFeedback onPress= {
      () =>{Keyboard.dismiss()}
    }>
    <View style={styles.container}>
       <Header />
      <View style={styles.content}>
       <AddTodo  submitHandler={submitHandler}/>
        <View style={styles.list}>
         <FlatList data={todos} renderItem={({item}) => (
            <TodoItem item={item} pressHandler={pressHandler}  />
         )}/>
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
    flex:1,
  },
  list:{
    marginTop: 20,
    flex:1
  }
});
