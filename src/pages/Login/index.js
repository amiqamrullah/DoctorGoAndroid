import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { useDispatch } from 'react-redux'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { Fire } from '../../config'
import { colors, fonts, showError, storeData, useForm } from '../../utils'

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  })
  const dispatch = useDispatch();

  const login = () => {
    dispatch({type: 'SET_LOADING', value: true})
    Fire.auth()
    .signInWithEmailAndPassword(form.email, form.password)
    .then(res => {
      Fire.database()
      .ref(`users/${res.user.uid}/`)
      .once('value')
      .then(resDB => {
        if(resDB.val()){
          storeData('user', resDB.val())
          dispatch({type: 'SET_LOADING', value: false})
          navigation.replace('MainApp')
        }
      })
      
    })
    .catch(error => {
      dispatch({type: 'SET_LOADING', value: false})
      const errorMessage = error.message;
      showError(errorMessage)
      
    })
  }
  
  return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
        <ILLogo/>
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <Input label="Email Address" value={form.email} onChangeText={(value) => setForm('email', value)}/>
        <Gap height={24}/>
        <Input label="Password" value={form.password} onChangeText={(value) => setForm('password', value)} secureTextEntry/>
        <Gap/>
        <Link title="Forgot My Password" size={12}/>
        <Gap height={40}/>
        <Button title="Sign In" onPress={login}/>
        <Gap height={20}/>
        <Link title="Create New Account" align="center" size={16} onPress={() => navigation.navigate('Register')}/>
        <Gap height={100}/>
      </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1
  },
  title: {
    marginVertical: 40,
    fontSize: 20,
    fontFamily: fonts.Nunito[600],
    maxWidth: 155,
  },
})
