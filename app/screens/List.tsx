import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { FIRESTORE_DB } from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';

const List = ({navigation}:any) => {
const addTodo=async()=>{
    addDoc(collection(FIRESTORE_DB,'todos'),{title:"Tst",done:false});
  };
  return (
    <View>
      <Text>List</Text>
      <Button onPress={()=>navigation.navigate('Details')} title='Open Details'/>
    </View>
  )
}

export default List;