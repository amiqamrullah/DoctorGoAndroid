import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DummyUser, ILNullPhoto } from '../../../assets'
import { colors, fonts, getData } from '../../../utils'

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profession: '',
  })
  useEffect(() => {
    getData('user').then(res => {
      const data = res
      data.photo = {uri:res.photo}
      setProfile(data)
    }, [])
  })
    return (
      <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <Image source={profile.photo} style={styles.avatar}/>
        <View>
          <Text style={styles.name}>{profile.fullName}</Text>
          <Text style={styles.profession}>{profile.profession}</Text>
        </View>
        
      </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row'
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46/2,
    marginRight: 12,
  },
  name: {
    fontFamily: fonts.Nunito[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  profession: {
    fontFamily: fonts.Nunito[600],
    fontSize: 12,
    color: colors.text.secondary,

  }
})
