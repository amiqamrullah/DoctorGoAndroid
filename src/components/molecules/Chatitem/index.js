import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import IsMe from './IsMe.js'
import Other from './Other.js'

const Chatitem = ({isMe, text, date, photo}) => {
  if (isMe){
    return <IsMe text={text} date={date}/>
  }
  return <Other text={text} date={date} photo={photo}/>
}

export default Chatitem

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 16, 
  },
  chatContent: {
    maxWidth: '70%',
    backgroundColor: colors.cardLight,
    padding: 12,
    paddingRight: 20,
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  text: {
    fontFamily: fonts.Nunito[400],
    fontSize: 14,
    color: colors.text.primary
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.Nunito[400],
    color: colors.text.secondary,
    marginTop: 8,  
  }
})
