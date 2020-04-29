import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'
const ImageScreen = () => {
    return(
        <View>
            <ImageDetail title="Forest" imageSource={require('../../assets/header.png')} imageScore={9}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageScreen