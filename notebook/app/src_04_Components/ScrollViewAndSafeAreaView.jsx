import React, {useState} from 'react';
import {Text, StyleSheet,View,Dimensions,ScrollView, Platform, SafeAreaView} from 'react-native';

const ScrollViewAndSafeAreaView = ()=>{

    return(
        <SafeAreaView>
        <ScrollView
            style={{backgroundColor:'#dfb'}}
            horizontal={true}
        >
            <Text style={[styles.nav]}>News</Text>
            <Text style={[styles.nav]}>Entertainment</Text>
            <Text style={[styles.nav]}>Sports</Text>
            <Text style={[styles.nav]}>Technology</Text>
            <Text style={[styles.nav]}>Global</Text>
            <Text style={[styles.nav]}>Fashion</Text>
            <Text style={[styles.nav]}>Financial</Text>
        </ScrollView>
        <ScrollView
            style={[styles.ScrollView]}
            contentContainerStyle={{margin:30}}
            showsVerticalScrollIndicator={false}
        >
            <Text style={[styles.text]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce orci quam, cursus aliquet neque at, tincidunt feugiat tortor. Aenean faucibus, eros vel gravida faucibus, felis odio porttitor quam, vel tristique libero urna non lorem. Nullam vel imperdiet orci, vitae blandit diam. Etiam luctus libero vel dolor fringilla auctor. Maecenas gravida tellus ante, quis posuere odio fringilla vel. Nunc purus leo, faucibus ac orci ac, mollis iaculis dolor. Pellentesque iaculis semper dolor, id lobortis orci fringilla eget. Sed vel lorem suscipit, convallis enim ut, consequat neque. Donec congue ac leo non mollis.
                Nam id ultricies tellus, nec hendrerit neque. Aenean vitae nisi eget ligula semper lobortis sit amet faucibus ipsum. Proin non ornare ante. Fusce id auctor felis, in hendrerit mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam tempor fringilla sagittis. Morbi elementum enim et pharetra viverra.
                Cras ornare interdum odio quis interdum. Nam sem mi, rutrum eget ultricies et, vestibulum non augue. Nam quis facilisis nisl. Vestibulum dignissim eget risus venenatis porta. Vestibulum tincidunt justo risus, a lobortis augue sodales in. Ut ac mollis massa. Fusce condimentum at libero a tincidunt. Sed nec rhoncus nibh, et pellentesque tortor. Vestibulum sollicitudin interdum tempus. Duis mollis eros dui, at efficitur nulla venenatis nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed molestie, arcu a egestas bibendum, quam libero porta metus, vel iaculis turpis lectus nec nunc. Sed dui erat, malesuada ac tincidunt et, sollicitudin eget tellus. Integer eget libero iaculis, viverra nisl in, convallis metus. Praesent ac condimentum neque, eget viverra libero. Vestibulum ut ante dapibus, dapibus lacus interdum, aliquam urna.
            </Text>
            <View style={{height:Platform.OS === 'ios'? 0:30}}></View>
        </ScrollView>
        </SafeAreaView>
        )
    }

const styles = StyleSheet.create({
    text:{
        fontSize:30
    },
    ScrollView:{
        backgroundColor:'#ddd',
        marginHorizontal:20
    },
    nav:{
        margin:10,
        height:50,
        fontSize:30
        }
    })

export default ScrollViewAndSafeAreaView;