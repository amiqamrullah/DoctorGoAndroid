import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconEditProfile, IconHelp, IconLanguage, IconNext, IconRate } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ListDoctor = ({profile, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile'){
      return <IconEditProfile/>
    }
    if (icon === 'language'){
      return <IconLanguage/>
    }
    if (icon === 'rate'){
      return <IconRate/>
    }
    if (icon === 'help'){
      return <IconHelp/>
    }
    return <IconEditProfile/>
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon/> : <Image source={profile} style={styles.image}/>}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {
        type === 'next' && <IconNext/>
      }
    </TouchableOpacity>
  )
}

export default ListDoctor

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  content: {
    flex: 1,
    marginLeft: 16
  },
  image: {
    height: 46,
    width: 46,
    borderRadius: 46/2,
    marginRight: 12,
  },
  name: {
    color: colors.text.primary,
    fontFamily: fonts.Nunito[400],
    fontSize: 16,

  },
  desc: {
    fontFamily: fonts.Nunito[300],
    fontSize: 12,
    color: colors.text.secondary,
    textTransform: 'capitalize'
  }


})
