import React, {  useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    const [  password, setPassword ] = useState('')
    const [ validation, setValidation ] = useState(true)

    return(
        <View>
            <Text>Enter password: </Text>
            <TextInput
                type="password"
                autoCorrect={false}
                style={styles.input}
                autoCapitalize="none"
                value={password}
                onChangeText={(newValue) => {
                        newValue.length <= 5 ? setValidation(true) : setValidation(false)
                        setPassword(newValue)
                    }
                }
            />     
            { validation ? <Text>Password must be longer than 5 characteres </Text> : null}   
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen