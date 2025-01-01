import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Card({ item }) {
    return (
        <TouchableOpacity>
            <View style={styles.card}>
                <Image source={require('../assets/images/jh.png')}  style={styles.image} />
                <View style={styles.text}>
                    <Text>{item.startLocation}</Text>
                    <Text>{item.startTime}</Text>
                    <Text>{item.endLocation}</Text>
                    <Text>{item.endTime}</Text>
                </View>
            </View>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    card: {
        width: 255,
        height: 120,
        backgroundColor: '#FFFFFF',
        borderRadius: 15,
        overflow: 'hidden',
        marginRight: 10, // Adds spacing between cards
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    image: {
        width: 150,
        height: 118,
        left: 5,
        resizeMode: 'cover',
    },
    text: {
        flexDirection: 'column'
    }

})