import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DummyNews1, DummyNews2 } from '../../../assets'
import { Fire } from '../../../config'
import { colors, fonts, showError } from '../../../utils'

const NewsItem = ({onPress, title, image, date}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Image source={{uri: image}} style={styles.image}/>
    </TouchableOpacity>
  )
}

export default NewsItem

const styles = StyleSheet.create({
  title:{
    fontFamily: fonts.Nunito[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  date: {
    fontFamily: fonts.Nunito[400],
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 4,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingTop: 1,
    paddingBottom: 12,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
  },
  titleWrapper:{
    flex: 1
  }
})
