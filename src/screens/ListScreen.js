import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const data = [
        { name: 'ana', age: 25},
        { name: 'mateus' , age: 28},
        { name: 'lise', age: 25}
    ]
    return (
        <FlatList
            keyExtractor={(name) => name.name}
            data={data}
            renderItem={({item})=>{
            return <Text style={styles.textStyle}>{item.name}/ {item.age}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen