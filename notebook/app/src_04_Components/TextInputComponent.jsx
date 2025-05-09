import React, {useState} from 'react';
import { Text, StyleSheet, View,TextInput,Dimensions, Button} from 'react-native';

const TextInputComponent = ()=>{

     const [userName, setUserName] = useState('')
     const [password, setPassword] = useState('')

    doLogin = ()=>{
        alert(`Username: ${userName}`)
        }

    return(
        <View style={[styles.container]}>
            <TextInput
                style={[styles.input]}
                placeholder='please input user name'
                value={userName}
                onChangeText ={(val) => setUserName(val)}
            />
            <TextInput
                style={[styles.input]}
                placeholder='please input password'
                value={password}
                secureTextEntry={true}
                onChangeText ={(val) => setPassword(val)}
            />
            <View>
                <Button
                    title='Login'
                    onPress={doLogin}
                />
            </View>
        </View>
        )
    };

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    input:{
        width:Dimensions.get('window').width-20,
        margin:10,
        borderWidth:1,
        borderColor:'red',
        paddingHorizontal:5
    },
    btn:{
        margin:20
    }


    })

export default TextInputComponent;