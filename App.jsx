import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen';
import { useAddnewdataMutation, useDeletedataMutation, useGetalldataQuery, useGetdatabyidQuery } from './src/service';

export default function App() {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  // const { data } = useGetalldataQuery();
  // console.log('Data : ', data);

  // const { data } = useGetdatabyidQuery(100);
  // console.log('Data 1 : ', data);

  const [addNewData, { data: responseData, error: error }] = useAddnewdataMutation();

  const addNewPost = async () => {
    await addNewData({
      "userId": 101,
      "id": 101,
      "title": "jay padhara and this is meeeee...............",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    });
  }

  // useEffect(() => {
  //   if (responseData) {
  //     console.log(responseData, 'data.....');
  //   } else {
  //     console.log(error);
  //   }
  // }, [responseData, error]);

  const [deletepost] = useDeletedataMutation();

  const deletePost = async () => {
    const res = await deletepost('2');
    console.log(res);
  }

  return (
    <View>
      <Text> Splash screen </Text>

      <Button title='Add new data' onPress={() => addNewPost()} />

      <Button title='Delete data' onPress={() => deletePost()} />

    </View>
  );
}
