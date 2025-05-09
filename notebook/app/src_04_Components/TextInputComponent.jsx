import React, {useState} from 'react';
import { Text, StyleSheet, View,TextInput,Dimensions, Button} from 'react-native';

const TextInputComponent = ()=>{

     const [userName, setUserName] = useState('')
     const [password, setPassword] = useState('')
     const [phoneNum, setPhoneNum] = useState('')

    doLogin = ()=>{
        alert(`Username: ${phoneNum}`)
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
            <TextInput
                style={[styles.input]}
                placeholder='phone number'
                keyBoardType="number-pad"
                value={phoneNum}
                onChangeText ={(val) => setPhoneNum(`${val}`)}
            />
            <TextInput
                style={[styles.input]}
                placeholder='self Introduction'
                multiline = {true}
                numberOfLines = {5}
                textAlignVertical = 'top'
            />
            <View>
                <Button
                    title='Confirm'
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