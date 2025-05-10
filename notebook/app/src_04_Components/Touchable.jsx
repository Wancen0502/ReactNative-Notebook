import React, {useState} from 'react';
import {Text, StyleSheet, View,Dimensions,TouchableHighlight,TouchableOpacity,TouchableWithoutFeedback} from 'react-native';

const Touchable = ()=>{
    return (
        <View style={[styles.container]}>
            <TouchableHighlight
                onPress={()=>console.log('highlight')}
            >
            <View style={[styles.item]}>
                <Text>Highlight</Text>
            </View>
            </TouchableHighlight>
            <TouchableOpacity
                onPress={()=>console.log('Opacity')}
            >
            <View style={[styles.item]}>
                <Text>Opacity</Text>
            </View>
            </TouchableOpacity>
            <TouchableWithoutFeedback
                onPress={()=>console.log('Without Feedback')}
            >
            <View style={[styles.item]}>
                <Text>Without Feedback</Text>
            </View>
            </TouchableWithoutFeedback>

        </View>

        )
    }

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    item:{
        marginBottom:20,
        padding:10,
        borderWidth:1,
        borderColor:'red'
    }
    })

export default Touchable;