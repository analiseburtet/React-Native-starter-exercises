import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
    return(
        <View>
            <TextInput
                autoCorrect={false}
                style={styles.input}
                autoCapitalize="none"
            />        
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