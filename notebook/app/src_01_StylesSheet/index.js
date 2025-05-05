import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const LotsOfStyles = () => {
  return (
    <View>
      <Text style={{fontSize:30}}>Text Component</Text>
      <Text style={[{color:'red'},{color:'green'}]}>Text Component</Text>
      <Text style={styles.h1}>Hello React Native</Text>
      <Text style={styles.h2}>Hello React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  h1:{
    fontSize:40,
    fontWeight:'bold'
  },
  h2:{
    fontSize:30,
    fontWeight:'light'
  }
});

export default LotsOfStyles;