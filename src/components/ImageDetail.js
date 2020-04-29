import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ title, imageSource, imageScore }) => {
    return(
        <View>
            <Image style={styles.image} source={imageSource}/>
            <Text>{title}</Text>
            <Text>{imageScore}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 30,
        width: 30
    }
})

export default ImageDetail