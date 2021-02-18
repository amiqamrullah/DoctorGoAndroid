import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { ILGetStarted, ILLogo } from '../../assets'
import { Button, Gap } from '../../components'
import { colors, fonts } from '../../utils'

const GetStarted = ({navigation}) => {
  const stateGlobal = useSelector(state => state)
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <View style={styles.logo}>
          <ILLogo/>
        </View>
        
        <Text style={styles.title}>
            Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      
      <View>
        <Button title='Get Started' onPress={() => navigation.navigate('Register')}/>
        <Gap height={16}/>
        <Button type='secondary' title='Sign In' onPress={() => navigation.navigate('Login')}/>
      </View>
        
    </ImageBackground>
  )
}

export default GetStarted

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1
  },

  title: {
    fontSize: 28,
    color: colors.white,
    marginTop: 40,
    fontFamily: fonts.Nunito[700],
    textAlign: 'center'
  },
  logo: {
    alignItems: 'center',
    marginTop: 51
  }
})
