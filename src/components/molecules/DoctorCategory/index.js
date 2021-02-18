import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ILCatAnak, ILCatObat, ILCatPsikiater, ILCatUmum } from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorCatergory = ({category , onPress}) => {
  const Icon = () => {
    if (category === 'Dokter Umum'){
      return <ILCatUmum style={styles.illustration}/>
    }
    if (category === 'Psikiater'){
      return <ILCatPsikiater style={styles.illustration}/>
    }
    if (category === 'Dokter Obat'){
      return <ILCatObat style={styles.illustration}/>
    }
    if (category === 'Dokter Anak'){
      return <ILCatAnak style={styles.illustration}/>
    }
    else {
      return <ILCatUmum style={styles.illustration}/>
    }
  }
    return (
      <TouchableOpacity style={styles.wrapper} onPress={onPress}>
        <Icon/>
        <Text style={styles.label}>Saya butuh</Text>
        <Text style={styles.category}>{category}</Text>
      </TouchableOpacity>
    )
}

export default DoctorCatergory

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.cardLight,
    borderRadius: 10,
    height: 150,
    width: 100,
    padding: 12,
    alignSelf: 'flex-start',
    marginRight: 10,
  },
  illustration: {
    marginBottom: 28,
  },
  label: {
    fontFamily: fonts.Nunito[300],
    fontSize: 12,
  },
  category: {
    fontFamily: fonts.Nunito[600],
    fontSize: 12,
    
  }
})
