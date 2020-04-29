import React from 'react'
import { View, Text, Button } from 'react-native'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={() => onIncrease()} title={`more ${color}`}/>
            <Button onPress={() => onDecrease()} title={`less ${color}`}/>
        </View>
    )
}

export default ColorCounter