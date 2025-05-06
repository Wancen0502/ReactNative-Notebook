import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

//Alignment of items along the main axis
const JustifyContent = () => {
  return (
      <ScrollView>
        <Text style={[styles.h2]}>Alignment of items along the main axis </Text>
        <View>
            <Text style={[styles.h3]}>justifyContent: 'flex-start'(default)</Text>
            <View style={[styles.container,styles.flexRow,styles.justifyContentStart]}>
                <Text style={[styles.itemBase]}>Apple</Text>
                <Text style={[styles.itemBase]}>Banana</Text>
                <Text style={[styles.itemBase]}>Peach</Text>
            </View>
        </View>
        <View>
            <Text style={[styles.h3]}>justifyContent: 'center'</Text>
             <View style={[styles.container, styles.flexRow, styles.justifyContentCenter]}>
                 <Text style={[styles.itemBase]}>Apple</Text>
                 <Text style={[styles.itemBase]}>Banana</Text>
                 <Text style={[styles.itemBase]}>Peach</Text>
             </View>
        </View>
        <View>
            <Text style={[styles.h3]}>justifyContent: 'flex-end'</Text>
             <View style={[styles.container, styles.flexRow, styles.justifyContentEnd]}>
                 <Text style={[styles.itemBase]}>Apple</Text>
                 <Text style={[styles.itemBase]}>Banana</Text>
                 <Text style={[styles.itemBase]}>Peach</Text>
             </View>
        </View>
         <View>
             <Text style={[styles.h3]}>justifyContent: 'space-around'</Text>
             <View style={[styles.container, styles.flexRow,styles.justifyContentAround]}>
                 <Text style={[styles.itemBase]}>Apple</Text>
                 <Text style={[styles.itemBase]}>Banana</Text>
                 <Text style={[styles.itemBase]}>Peach</Text>
             </View>
         </View>
         <View>
             <Text style={[styles.h3]}>justifyContent: 'space-evenly'</Text>
             <View style={[styles.container, styles.flexRow,styles.justifyContentEvenly]}>
                 <Text style={[styles.itemBase]}>Apple</Text>
                 <Text style={[styles.itemBase]}>Banana</Text>
                 <Text style={[styles.itemBase]}>Peach</Text>
             </View>
         </View>
         <View>
             <Text style={[styles.h3]}>justifyContent: 'space-between'</Text>
             <View style={[styles.container, styles.flexRow,styles.justifyContentBetween]}>
                 <Text style={[styles.itemBase]}>Apple</Text>
                 <Text style={[styles.itemBase]}>Banana</Text>
                 <Text style={[styles.itemBase]}>Peach</Text>
             </View>
         </View>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
      container:{
          height:150,
          margin:10,
          borderWidth:1,
          borderColor:'#ddd'
          },
      h2:{
          fontSize:30,
          marginHorizontal:10
          },
      h3:{
          fontSize:24,
          marginHorizontal:10
          },
      itemBase:{
          height:30,
          borderWidth:1,
          borderColor:'blue',
          backgroundColor:'#dfb',
          padding:4,
          textAlign:'center'
          },
      flexRow:{
          flexDirection:'row'
          },
      justifyContentStart:{
          justifyContent:'flex-start'
          },
      justifyContentCenter:{
          justifyContent:'center'
          },
      justifyContentEnd:{
          justifyContent:'flex-end'
          },
      justifyContentAround:{
          justifyContent:'space-around'
          },
      justifyContentEvenly:{
          justifyContent:'space-evenly'
          },
      justifyContentBetween:{
          justifyContent:'space-between'
          }
      });

export default JustifyContent;