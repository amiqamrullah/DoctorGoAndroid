import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconRemovePhoto } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Profile = ({name, desc, isRemove, photo, onPress}) => {
  return (
    <View style={styles.container}>
      {!isRemove && (
        <View style={styles.imageWrapper}>
          <Image source={photo} style={styles.avatar}/>
        </View>
      )}
      {isRemove && (
        <TouchableOpacity style={styles.imageWrapper} onPress={onPress}>
        <Image source={photo} style={styles.avatar}/>
        {isRemove && <IconRemovePhoto style={styles.removePhoto}/> }
      </TouchableOpacity>
      )}
      {
        name && (
          <View style={styles.avatarDesc}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.desc}>{desc}</Text>
          </View>
        )
      }
      
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110/2
  },
  imageWrapper: {
    width: 130,
    height: 130,
    borderRadius: 130/2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  name:{
    fontSize: 20,
    fontFamily: fonts.Nunito[600],
    color: colors.text.primary,
    marginTop: 16,
  },
  desc:{
    fontFamily: fonts.Nunito[400],
    fontSize: 16,
    color: colors.text.secondary,
    textTransform: 'capitalize'

  },
  avatarDesc: {
    alignItems: 'center'
  },
  removePhoto: {
    position: 'absolute',
    right: 6,
    bottom: 8
  }
})
