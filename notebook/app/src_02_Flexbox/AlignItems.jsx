import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

//Alignment of items along the cross axis
const AlignItems = () => {
  return (
      <ScrollView>
      <View>
        <Text style={[styles.h2]}> Alignment of items along the cross axis </Text>
        <View>
            <Text style={[styles.h3]}>alignItemStart: 'flex-start'</Text>
            <View style={[styles.container,styles.flexRow,styles.alignItemsStart]}>
                <Text style={[styles.itemBase]}>Apple</Text>
                <Text style={[styles.itemBase]}>Banana</Text>
                <Text style={[styles.itemBase]}>Peach</Text>
            </View>
        </View>
        <View>
            <Text style={[styles.h3]}>alignItemStart: 'center'</Text>
             <View style={[styles.container, styles.flexRow, styles.alignItemsCenter]}>
                 <Text style={[styles.itemBase]}>Apple</Text>
                 <Text style={[styles.itemBase]}>Banana</Text>
                 <Text style={[styles.itemBase]}>Peach</Text>
             </View>
        </View>
        <View>
            <Text style={[styles.h3]}>alignItemStart: 'flex-end'</Text>
             <View style={[styles.container, styles.flexRow, styles.alignItemsEnd]}>
                 <Text style={[styles.itemBase]}>Apple</Text>
                 <Text style={[styles.itemBase]}>Banana</Text>
                 <Text style={[styles.itemBase]}>Peach</Text>
             </View>
        </View>
         <View>
             <Text style={[styles.h3]}>alignItems:'stretch'(default)</Text>
             <View style={[styles.container, styles.flexRow,styles.alignItemsStretch]}>
                 <Text style={[styles.itemBase]}>Apple</Text>
                 <Text style={[styles.itemBase]}>Banana</Text>
                 <Text style={[styles.itemBase]}>Peach</Text>
             </View>
         </View>
         <View>
             <Text style={[styles.h3]}>alignItems:'baseline'</Text>
             <View style={[styles.container, styles.flexRow,styles.alignItemsBaseline]}>
                 <Text style={[styles.itemBase,{fontSize:20} ]}>Apple</Text>
                 <Text style={[styles.itemBase,{fontSize:30} ]}>Banana</Text>
                 <Text style={[styles.itemBase,{fontSize:40} ]}>Peach</Text>
             </View>
         </View>
      </View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
      container:{
          height:100,
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
          borderWidth:1,
          borderColor:'blue',
          backgroundColor:'#dfb',
          padding:4,
          textAlign:'center'
          },
      flexRow:{
          flexDirection:'row',
          },
      alignItemsStart:{
          alignItems:'flex-start'
          },
      alignItemsCenter:{
           alignItems:'center'
          },
      alignItemsEnd:{
           alignItems:'flex-end'
          },
      alignItemsStretch:{
           alignItems:'stretch'
          },
      alignItemsBaseline:{
           alignItems:'baseline'
          },
      });

export default AlignItems;