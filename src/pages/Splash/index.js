import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Fire } from '../../config'
import { colors, fonts } from '../../utils'

const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if(user){
          // user login
          navigation.replace('GetStarted')
        }else{
          // user sudah logout
          navigation.replace('GetStarted')
        }
      }, 3000)
    })
    return () => unsubscribe();   

  }, [navigation])
  return (
    <View style={styles.page}>
      <ILLogo/>
      <Text style={styles.title}>
        DoctorGO
      </Text>
    </View>
  )
}

export default Splash
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white, 
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center'
  },
  title: { 
    fontSize: 20, 
    color: colors.text.primary, 
    marginTop: 20,
    fontFamily: fonts.Nunito[900]
  },

});
