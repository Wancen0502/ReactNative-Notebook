import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

//The item's share on the main axis
const Flex = () => {
    return (
        <ScrollView>
          <Text style={[styles.h2]}> The item's share on the main axis </Text>
          <View>
              <Text style={[styles.h3]}>flexRow:1:1:1</Text>
              <View style={[styles.container,styles.flexRow]}>
                  <Text style={[styles.itemBase, {flex:1}]}>Apple</Text>
                  <Text style={[styles.itemBase, {flex:1}]}>Banana</Text>
                  <Text style={[styles.itemBase, {flex:1}]}>Peach</Text>
              </View>
          </View>
          <View>
              <Text style={[styles.h3]}>flexRow:1:2:3'</Text>
               <View style={[styles.container, styles.flexRow]}>
                   <Text style={[styles.itemBase,{flex:1}]}>Apple</Text>
                   <Text style={[styles.itemBase,{flex:2}]}>Banana</Text>
                   <Text style={[styles.itemBase,{flex:3}]}>Peach</Text>
               </View>
          </View>
          <View>
              <Text style={[styles.h3]}>flexColumn: '1:1:1'</Text>
               <View style={[styles.container, styles.flexColumn]}>
                   <Text style={[styles.itemBase, {flex:1}]}>Apple</Text>
                   <Text style={[styles.itemBase, {flex:1}]}>Banana</Text>
                   <Text style={[styles.itemBase, {flex:1}]}>Peach</Text>
               </View>
          </View>
           <View>
               <Text style={[styles.h3]}>flexColumn: '1:2:3'</Text>
               <View style={[styles.container, styles.flexColumn]}>
                   <Text style={[styles.itemBase, {flex:1}]}>Apple</Text>
                   <Text style={[styles.itemBase, {flex:2}]}>Banana</Text>
                   <Text style={[styles.itemBase, {flex:3}]}>Peach</Text>
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
        flexColumn:{
            flexDirection:'column'
            }
        });

export default Flex;