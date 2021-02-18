import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDoctor6 } from '../../../assets'
import { colors, fonts } from '../../../utils'
const Other = ({text, date, photo}) => {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.avatar}/>
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  )
}

export default Other

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-start',
    paddingLeft: 16, 
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  chatContent: {
    maxWidth: '80%',
    backgroundColor: colors.primary,
    padding: 12,
    paddingRight: 20,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontFamily: fonts.Nunito[400],
    fontSize: 14,
    color: colors.white
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.Nunito[400],
    color: colors.text.secondary,
    marginTop: 8,  
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30/2,
    marginRight:12,
  }
})


