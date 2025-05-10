import React, {useState} from 'react';
import {StyleSheet, Text, View, SectionList, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
    {
        title: 'Main dishes',
        data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
        title: 'Sides',
        data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
     },
    {
        title: 'Drinks',
        data: ['Water', 'Coke', 'Beer'],
    },
    {
        title: 'Desserts',
        data: ['Cheese Cake', 'Ice Cream'],
     },
];

const SectionListComponent = () => {

    const [isRefresh, setIsRefresh] = useState(false)

    const loadData = () => {
        setIsRefresh(true);

        setTimeout(() => {
            setIsRefresh(false);
            alert('Refreshed!');
        }, 1000);
  };


    return(
         <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={['top']}>
              <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                  <View style={styles.item}>
                    <Text style={styles.title}>{item}</Text>
                  </View>
                )}
                renderSectionHeader={({section: {title}}) => (
                  <Text style={styles.header}>{title}</Text>
                )}
                ItemSeparatorComponent = {()=>{
                    return <View style={{borderBottomWidth:1, borderBottomColor:'red'}}></View>
                    }}
                ListEmptyComponent = {()=>{
                    return <Text style={{fontSize:30}}>'No food there'</Text>
                    }}
                refreshing={isRefresh}
                onRefresh={loadData}
                onEndReachedThreshold = {0.1}
                onEndReached = {()=>{
                    alert('This is the end')
                    }
                }
                ListHeaderComponent = { ()=>{
                    return <Text style={{fontSize:40}}>Menu</Text>
                    }}
                ListFooterComponent = { ()=>{
                    return <Text style={{fontSize:20}}>Have a good day</Text>
                    }}
              />
            </SafeAreaView>
          </SafeAreaProvider>
        )};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

export default SectionListComponent ;