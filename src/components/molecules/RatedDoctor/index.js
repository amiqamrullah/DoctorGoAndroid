import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconStar } from '../../../assets'
import { colors, fonts } from '../../../utils'

const RatedDoctor = ({onPress, name, desc, avatar}) => {
  return (
    <TouchableOpacity style={styles.content} onPress={onPress}>
      <Image source={avatar} style={styles.avatar}/>
      <View style={styles.textWrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{desc}</Text>
      </View>
      <View style={styles.starWrapper}>
        <IconStar/>
        <IconStar/>
        <IconStar/>
        <IconStar/>
        <IconStar/>
      </View>
    </TouchableOpacity>
  )
}

export default RatedDoctor

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50/2,
    marginRight: 12,
    

  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    alignItems: 'center'
  },
  name: {
    fontFamily: fonts.Nunito[600],
    fontSize: 16,
    color: colors.text.primary
  },
  profession:{
    fontSize: 12,
    fontFamily: fonts.Nunito[400],
    color: colors.text.secondary,
    textTransform: 'capitalize'
  },
  starWrapper: {
    flexDirection: 'row'
  },
  textWrapper: {
    flex: 1
  }
})
