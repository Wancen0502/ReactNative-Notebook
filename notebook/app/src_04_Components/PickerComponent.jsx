import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const PickerComponent = () =>{

     return (
         <View style = {[styles.container]}>
            <RNPickerSelect
                style = {{height:50, width:100}}
                onValueChange={(value) => console.log(value)}
                mode = {'dropdown'}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
        />
        </View>
      );
    }

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        }

    })

export default PickerComponent;