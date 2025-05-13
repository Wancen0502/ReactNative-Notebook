import React,{useState} from 'react';
import { Text, StyleSheet, View, Button,SafeAreaView, FlatList, Alert,StatusBar, TouchableOpacity} from 'react-native';

const FlatListComponent = ()=>{

   const [isLoading,setIsLoading] = useState(false)
   const [selectedId, setSelectedId] = useState(null)

    const DATA =[
        {
            id: '1',
            title: 'Global',
        },
        {
            id: '2',
            title: 'Entertainment',
        },
        {
            id: '3',
            title: 'Sport',
        },
        {
             id: '4',
             title: 'Financial',
        },
        {
            id: '5',
            title: 'Military',
        },
        {
            id: '6',
            title: 'Fashion',
        },
        {
            id: '7',
            title: 'Society',
        },
        {
            id: '8',
            title: 'Political',
        },
        {
            id: '9',
            title: 'Life',
        },
        {
            id: '10',
            title: 'History',
        },
    ];

    const renderItem = ({index, item}) =>{
        const backgroundColor = item.id === selectedId ? '#dfb': '#f9c2ff'
        return <TouchableOpacity style={[styles.item, {backgroundColor}]}
                onPress = {()=>{
                    setSelectedId(item.id)
                    }}
                >
                    <Text style={styles.title}>{item.title}</Text>
               </TouchableOpacity>
        }

    const loadData = ()=>{
        setIsLoading(true);
        setTimeout(() => {
              setIsLoading(false);
              Alert.alert('Data Refreshed');
            }, 2000);
        }

    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem ={renderItem}
                keyExtractor = {item => item.id}
                horizontal = {false} //horizontal layout
                initialScrollIndex = {0}
                initialNumToRender = {10}
                numColumns = {1}
                extraData ={selectedId}
                inverted = {false}
                itemSeparatorComponent = {()=>{
                    return <View style={[styles.itemSeparator]}></View>
                    }}
                ListEmptyComponent = { ()=>{
                    return <Text style={{fontSize:30}}>Nothing there</Text>
                    }}
                refreshing= {isLoading}
                onRefresh = {loadData}
                onEndReachedThreshold = {0.1}
                onEndReached = { ()=>{
                    alert('This is the end')
                  }}
                ListHeaderComponent = { ()=>{
                    return <Text style={[styles.header]}>The head of the list</Text>
                   }}
                ListFooterComponent = { ()=>{
                    return <Text style={[styles.footer]}>The end of the list</Text>
                   }}
            >
            </FlatList>
        </SafeAreaView>
        )
    };

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

  },
  footer:{
      fontSize: 15,
  },
  title: {
      fontSize: 15,
  },
  itemSeparator:{
      borderBottomWidth:1,
      borderBottomColor:'red'
      }
});

export default FlatListComponent;