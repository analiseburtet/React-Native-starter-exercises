import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const name = 'Analise Burtet'
    return(
        <View>
            <Text style={styles.h1}>Getting started with RN!</Text>
            <Text style={styles.subHeadTitle}>My name is {name}</Text>    
        </View>
    )
}

const styles = StyleSheet.create({

    h1: {
        fontSize: 45
    },
    subHeadTitle: {
        fontSize: 20
    }
})

export default ComponentsScreen