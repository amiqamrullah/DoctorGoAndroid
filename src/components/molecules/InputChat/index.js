import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const InputChat = ({value, onChangeText, onButtonPress}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis Pesan Untuk Nairobi" value={value} onChangeText={onChangeText}/>
      <Button disable={value.length < 1} type="btn-icon-send" onPress={onButtonPress}/>
    </View>
  )
}

export default InputChat

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    flex: 1,
    fontSize: 14,
    fontFamily: fonts.Nunito[400],
    maxHeight: 45,
    marginRight: 10,
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: colors.white
    
  }
})
