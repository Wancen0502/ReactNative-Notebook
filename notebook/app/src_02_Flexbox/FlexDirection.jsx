import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

//声明主轴方向
const FlexDirection = () => {
  return (
    <ScrollView>
      <Text style={[styles.h2]}>Main Axis Direction </Text>
      <View>
          <Text style={[styles.h3]}>flexDirection: 'column'(default)</Text>
          <View style={[styles.container]}>
              <Text style={[styles.itemBase]}>Apple</Text>
              <Text style={[styles.itemBase]}>Banana</Text>
              <Text style={[styles.itemBase]}>Peach</Text>
          </View>
      </View>
      <View>
          <Text style={[styles.h3]}>flexDirection: 'column-reverse'</Text>
           <View style={[styles.container, styles.flexColumnReverse]}>
               <Text style={[styles.itemBase]}>Apple</Text>
               <Text style={[styles.itemBase]}>Banana</Text>
               <Text style={[styles.itemBase]}>Peach</Text>
           </View>
      </View>
      <View>
          <Text style={[styles.h3]}>flexDirection: 'row'</Text>
           <View style={[styles.container, styles.flexRow]}>
               <Text style={[styles.itemBase]}>Apple</Text>
               <Text style={[styles.itemBase]}>Banana</Text>
               <Text style={[styles.itemBase]}>Peach</Text>
           </View>
      </View>
       <View>
           <Text style={[styles.h3]}>flexDirection: 'row-reverse'</Text>
           <View style={[styles.container, styles.flexRowReverse]}>
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
    flexColumn:{
        flexDirection:'column'
        },
    flexColumnReverse:{
        flexDirection:'column-reverse'
        },
    flexRow:{
        flexDirection:'row'
        },
    flexRowReverse:{
        flexDirection:'row-reverse'
        }
    });

export default FlexDirection;