import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const Link = ({title, align, size, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text(align, size)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    text: (align, size) => ({
        fontFamily: fonts.Nunito.normal,
        fontSize: size,
        textDecorationLine: 'underline',
        color: colors.text.secondary,
        textAlign: align,
    })
})
