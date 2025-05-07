import React, {useState} from 'react';
import { Text, StyleSheet, View, StatusBar,Switch} from 'react-native';

const SwitchAndStatusBar = () => {

    const [isBarAppear, setIsBarAppear]= useState(false);

  return (
    <View style={[styles.container]}>
        <StatusBar
            hidden={isBarAppear}
            backgroundColor="red"
            barStyle='dark-content'
         />
          {/* StatusBar is only effective on Android for backgroundColor */}
         <Switch
            trackColor={{false:'#999',true:'#666'}}
            thumbColor= {isBarAppear? 'red': 'white'}
            value={isBarAppear}
            onValueChange={()=>
               setIsBarAppear(!isBarAppear)
                }
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
});

export default SwitchAndStatusBar;
