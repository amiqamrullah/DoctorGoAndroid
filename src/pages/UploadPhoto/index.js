import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { launchImageLibrary } from 'react-native-image-picker'
import { IconAddPhoto, IconRemovePhoto, ILNullPhoto } from '../../assets'
import { Button, Gap, Header, Link } from '../../components'
import { Fire } from '../../config'
import { colors, fonts, showError, storeData } from '../../utils'

const UploadPhoto = ({navigation, route}) => {
  const {fullName, profession, uid} = route.params;
  const [photoForDB, setPhotoForDB] = useState('')
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto)
  const getImage = () => {
    launchImageLibrary({quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true}, response => {
      if(response.didCancel || response.error){
        showError('Upload Failed')
      }else {
        setPhotoForDB(`data: ${response.type};base64, ${response.base64}`) ;
        const source ={uri: response.uri}
        setPhoto(source)
        setHasPhoto(true)
      }
    })
  }
  const uploadAndContinue = () => {
    Fire
    .database()
    .ref('users/' +uid+ '/')
    .update({photo: photoForDB})
    const data = route.params;
    data.photo = photoForDB;

    storeData('user', data)
    navigation.replace('MainApp')
  }
  return (
    <View style={styles.page} >
      <Header title="Upload Photo" onPress={() => navigation.goBack()}/>
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar}/>
            {hasPhoto && <IconRemovePhoto style={styles.addPhoto}/>}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto}/>}
            
          </TouchableOpacity>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
        
        <View>
          <Button title="Upload and Continue" disable={!hasPhoto}onPress={uploadAndContinue}/>
          <Gap height={30}/>
          <Link title="Skip for This" align="center" size={16}/>
        </View>
        

      </View>
      
    </View>
  )
}

export default UploadPhoto

const styles = StyleSheet.create({
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110/2
  },
  avatarWrapper: {
    borderColor: colors.border,
    borderWidth: 1,
    width: 130,
    height: 130,
    borderRadius: 130/2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontFamily: fonts.Nunito[600],
    fontSize: 24,
    color: colors.text.primary,
    textAlign: 'center'
  },
  profession : {
    fontFamily: fonts.Nunito.normal,
    fontSize: 18,
    textAlign: 'center',
    color: colors.text.secondary
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 40,
    flex: 1,
    justifyContent: 'space-between'
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})
