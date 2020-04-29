import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

const HomeScreen = ({navigation}) => {
    return(
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Components')}
            >
                <Text>Go to Components Demo</Text>
            </TouchableOpacity>            
            <TouchableOpacity
                onPress={() => navigation.navigate('List')}
            >
                <Text>Go to List Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('ImageScreen')}
            >
                <Text>Go to ImageScreen Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Counter')}
            >
                <Text>Go to Counter Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Color')}
            >
                <Text>Go to Color Demo</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Square')}
            >
                <Text>Go to Square Demo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 30
    }
})

export default HomeScreen