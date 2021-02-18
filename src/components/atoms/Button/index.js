import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import BtnIconSend from './BtnIcon'
import IconOnly from './IconOnly'

const Button = ({type, title, onPress, icon, disable}) => {
    if (type === 'btn-icon-send'){
        return <BtnIconSend disable={disable} onPress={onPress}/>
    }
    if(type === 'icon-only'){
        return <IconOnly icon={icon} onPress={onPress}/>
    }
    if (disable){
        return (
            <View style={styles.disableBG}>
                <Text style={styles.disbaleText}>{title}</Text>
            </View>
        );
    }
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: type => ({
        backgroundColor: type === 'secondary' ? colors.button.secondary.backgroundColor : colors.button.primary.backgroundColor,
        borderRadius: 10,
        paddingVertical: 10,
    }),
    text: type => ({
        textAlign: 'center',
        color: type === 'secondary' ? colors.button.secondary.text : colors.button.primary.text,
        fontSize: 18,
        fontFamily: fonts.Nunito[600],
    }),
    disableBG: {
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: colors.button.disable.backgroundColor
    },
    disbaleText: {
        fontSize: 18,
        fontFamily: fonts.Nunito[600],
        textAlign: 'center',
        color: colors.button.disable.text
    }


})
