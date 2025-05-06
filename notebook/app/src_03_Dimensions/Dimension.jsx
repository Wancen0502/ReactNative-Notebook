import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const Dimension = () => {
  return (
    <View style={[styles.container]}>
        <View style={[styles.itemBase]}><Text>Car</Text></View>
        <View style={[styles.itemBase]}><Text>Bus</Text></View>
        <View style={[styles.itemBase]}><Text>Plane</Text></View>
        <View style={[styles.itemBase]}><Text>Air Craft</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
      flexDirection:'row',
      flexWrap:'wrap'
      },
  itemBase:{
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#00b38a',
      width:Dimensions.get('window').width/4,
      height:90,
      borderWidth:1,
      borderColor:'yellow'
      }
});

export default Dimension;