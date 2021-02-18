import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button, Gap } from '../../atoms'
import DarkProfile from './DarkProfile'

const Header = ({onPress, title, desc, photo, type}) => {
    if(type === 'dark-profile'){
        return <DarkProfile onPress={onPress} title={title} desc={desc} photo={photo}/>
    }
    return (
        <View style={styles.content(type)}>
            <Button type='icon-only' icon={type === 'dark' ? 'back-light' : 'back-dark'} onPress={onPress}/>
            <Text style={styles.title(type)}>{title}</Text>
            <Gap width={24}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    content: type => ({
        flexDirection: 'row',
        paddingVertical: 30,
        paddingHorizontal: 16,
        alignItems: 'center',
        backgroundColor: type === 'dark' ? colors.secondary : colors.white,
        borderBottomLeftRadius: type === 'dark' ? 20 : 0,
        borderBottomRightRadius: type === 'dark' ? 20 : 0,
    }),
    title: type => (
        {
            justifyContent: 'center',
            flex: 1,
            textAlign: 'center',
            fontSize: 20,
            fontFamily: fonts.Nunito[600],
            color: type === 'dark' ? colors.white : colors.text.primary,
            
        }
    ),

})
