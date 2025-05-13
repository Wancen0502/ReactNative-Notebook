import React, {useEffect} from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  useAnimatedValue,
} from 'react-native';

const AnimatedApi = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useAnimatedValue(0);
  const moveAnim = useAnimatedValue(0);

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start(()=>{
        alert('appeared')
         });
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start(()=>{
        alert('disappeared')
        });
  };


  const scanMove = ()=>{
      moveAnim.setValue(0)
      Animated.timing(moveAnim,{
          toValue:200,
          duration: 2000,
          useNativeDriver: true
          }).start( ()=>{
              scanMove()
              })
      }

    useEffect(() => {
        scanMove();
      }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={[
            styles.fadingContainer,
            {
              // Bind opacity to animated value
              opacity: fadeAnim,
            },
          ]}>
          <Text style={styles.fadingText}>Fading View!</Text>
        </Animated.View>
        <View style={styles.buttonRow}>
          <Button title="Fade In View" onPress={fadeIn} />
          <Button title="Fade Out View" onPress={fadeOut} />
        </View>
        <View style = {[styles.scanContainer]}>
            <Animated.View style={[styles.border,
                {
                   transform:[{
                       translateY:moveAnim
                       }]
                }
                ]}>
            </Animated.View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
  scanContainer:{
      height:200,
      width:200,
      borderWidth:1,
      borderColor:'green'
  },
  border:{
      borderWidth:1,
      borderColor:'red'
  }

});

export default AnimatedApi;