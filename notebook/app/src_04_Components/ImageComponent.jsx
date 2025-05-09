import React, {useState} from 'react';
import { Text, StyleSheet, View, Image, Dimensions} from 'react-native';
import './images/sample.jpg';

const ImageComponent = () => {

  return (
    <View style={[styles.container]}>
        <Image
            style={[styles.itemImage]}
            source={require('./images/sample.jpg')}
        />
        <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
               style={{width: 400, height: 400}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  itemImage:{
      height:200,
      width:Dimensions.get('window').width,
      marginVertical:20
  }

});

export default ImageComponent;