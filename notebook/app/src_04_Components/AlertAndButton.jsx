import React from 'react';
import { Text, StyleSheet, View, Alert, Button } from 'react-native';

const AlertAndButton = () => {

  const createTwoButtonAlert = () => {
    Alert.alert(
      'Title of Alert',
      'Content of Alert',
      [
        {
          text: "Cancel",
          onPress: () => console.log('Cancel'),
          style: 'cancel'
        },
        {
          text: "Confirm",
          onPress: () => console.log('Confirm'),
          style: 'default'
        }
      ]
    );
  };

  const createThreeButtonAlert = () => {
    Alert.alert(
      'Update Reminder',
      'Do you want to update the version',
      [
        {
          text: "Cancel",
          onPress: () => console.log('Cancel'),
          style: 'cancel'
        },
        {
          text: "Confirm",
          onPress: () => console.log('Confirm'),
          style: 'default'
        },
        {
          text: "Maybe Later",
          onPress: () => console.log('Later')
        }
      ]
    );
  };

  return (
    <View style={[styles.container]}>
      <Button
        title="alert"
        onPress={() => {
          alert('It is a button')
        }}
      />
      <Button
        title="Alert.alert"
        onPress={() => {
          Alert.alert('It is a button')
        }}
        color={'red'}
      />
      <Button
        title="Alert with Two Buttons"
        onPress={createTwoButtonAlert}
        color={'green'}
      />
      <Button
        title="Alert with Three Buttons"
        onPress={createThreeButtonAlert}
        color={'tomato'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex:1
  }
});

export default AlertAndButton;
