import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const ListHospital = ({type, name, address, pic}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={pic} style={styles.image}/>
      <View>
        <Text style={styles.title}>{type}</Text>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ListHospital

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    padding: 16,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
    marginRight: 16,
  },
  title: {
    fontFamily: fonts.Nunito[400],
    color: colors.text.primary,
    fontSize: 16,
  },
  address: {
    fontFamily: fonts.Nunito[300],
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 6
  }
})
