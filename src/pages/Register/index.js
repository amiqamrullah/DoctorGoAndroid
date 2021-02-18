import React, { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input } from '../../components'
import { Fire } from '../../config'
import { colors, showError, storeData, useForm } from '../../utils'
import {useDispatch} from 'react-redux'

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  })
  const onContinue = () => {
    dispatch({type: 'SET_LOADING', value: true})
    Fire.auth().createUserWithEmailAndPassword(form.email, form.password)
    .then((success) => {
    // Signed in 
      dispatch({type: 'SET_LOADING', value: false})
      setForm('reset')
      const data = {
        fullName: form.fullName,
        profession: form.profession,
        email: form.email,
        uid: success.user.uid,
      }
      Fire
      .database()
      .ref('users/' +success.user.uid+ '/')
      .set(data)
      storeData('users', data)
      navigation.navigate('UploadPhoto', data)
    // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      showError(errorMessage)
      dispatch({type: 'SET_LOADING', value: false})
    // ..
    });
    
  }
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack() } title='Daftar Akun'/>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input label="Full Name" value={form.fullName} onChangeText={(value) => setForm('fullName', value)}/>
          <Gap height={24}/>
          <Input label="Pekerjaan" value={form.profession} onChangeText={(value) => setForm('profession', value)}/>
          <Gap height={24}/>
          <Input label="Email Address" value={form.email} onChangeText={(value) => setForm('email', value)}/>
          <Gap height={24}/>
          <Input label="Password" value={form.password} onChangeText={(value) => setForm('password', value)} secureTextEntry/>
          <Gap height={40}/>
          <Button title="Continue" onPress={onContinue}/>
          <Gap height={100}/>
        </ScrollView>
      </View>
    </View>
      
  )
}

export default Register

const styles = StyleSheet.create({
  content: {
    padding: 40,
    paddingTop: 10,

  },
  header: {
    flexDirection: 'row',
  },
  contentHeader: {
    flex: 1,
    
  },
  page: {
    backgroundColor: colors.white,
    flex:1
  }

})
