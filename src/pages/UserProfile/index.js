import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { useDispatch } from 'react-redux'
import { ILNullPhoto } from '../../assets'
import { Gap, Header, List, Profile } from '../../components'
import { Fire } from '../../config'
import { colors, getData } from '../../utils'

const UserProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profession: '',
  })
  useEffect(() => {
    getData('user').then(res => {
      const data = res
      data.photo = {uri:res.photo}
      setProfile(data)
    })
  }, [])
  const signOut = () => {
    dispatch({type: 'SET_LOADING', value: true})
    Fire.auth().signOut().then(() => {
      dispatch({type: 'SET_LOADING', value: false})
      navigation.replace('GetStarted')
    }).catch(error => {
      const errorMessage = error.message
      showMessage({
        message: errorMessage,
        type: 'default',
        backgroundColor: colors.error,
        color: colors.white
      })
    })
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()}/>
      <Gap height={16}/>
      {profile.fullName.length > 0 && (
        <Profile name={profile.fullName} desc={profile.profession} photo={profile.photo}/>
      )}
      <Gap height={14}/>
      <List name="Edit Profile" desc="Last Update Yesterday" type="next" icon="edit-profile" onPress={() => navigation.navigate('UpdateProfile')}/>
      <List name="Language" desc="Available 12 Languages" type="next" icon="language"/>
      <List name="Give Us Rate" desc="On Google Play Store" type="next" icon="rate"/>
      <List name="Log Out" desc="Log Out Your Account" type="next" icon="help" onPress={signOut}/>
    </ScrollView>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1
  }
})
