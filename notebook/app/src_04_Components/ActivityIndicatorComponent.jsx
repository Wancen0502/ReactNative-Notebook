import React, {useState} from 'react';
import { Text, StyleSheet, View, ActivityIndicator} from 'react-native';

const ActivityIndicatorComponent = () => {

  return (
    <View style={[styles.container]}>
        <ActivityIndicator
            color='blue'
            size={'large'}
        />
        <ActivityIndicator
            color='green'
            size={'small'}
        />
        <ActivityIndicator
            color='#00d0ff'
            size={70}
        />
        <ActivityIndicator
            color='red'
            size={100}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  }

})

export default ActivityIndicatorComponent;
