import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILNullPhoto } from '../../assets'
import { List } from '../../components'
import { Fire } from '../../config'
import { colors, fonts, getData } from '../../utils'

const Messages = ({navigation}) => {
  const [historyChat, setHistoryChat] = useState([])
  const [user, setUser] = useState({})
  useEffect(() => {
    getDataUserFromLocal();
    const rootDB = Fire.database().ref()
    const urlHistory = `messages/${user.uid}/`
    const messageDB = rootDB.child(urlHistory)


    messageDB.on('value',async snapshot => {
      if(snapshot.val()){
        const oldData = snapshot.val();
        const data = []

        const promises = await Object.keys(oldData).map(async key => {
          const urlUidDoctor = `doctors/${oldData[key].uidPartner}`
          const detailDoctor = await rootDB.child(urlUidDoctor).once('value');
          data.push({
            id: key,
            detailDoctor: detailDoctor.val(),
            ...oldData[key],
          })
        })

        await Promise.all(promises)
        setHistoryChat(data)
      }
    })
    // return () => {
    //   cleanup
    // }
  }, [user.uid])
  const getDataUserFromLocal = () => {
    getData('user').then(res => {
      setUser(res);
    })
  }
    return (
      <View style={styles.page}>
        <View style={styles.content}>
          <Text style={styles.title}>Messages</Text>
          {historyChat.map(chat => {
            const dataDoctor = {
              id: chat.detailDoctor.uid,
              data: chat.detailDoctor,
            }
            return (
              <List key={chat.id} profile={{uri: chat.detailDoctor.photo}} name={chat.detailDoctor.fullName} desc={chat.lastContentChat} onPress={() => navigation.navigate('Chatting', dataDoctor)}/>
            ); 
          })}
          
        </View>
        
      </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    content: {
      backgroundColor: colors.white,
      flex: 1,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    title: {
      marginTop: 30,
      marginLeft: 16,
      color: colors.text.primary,
      fontFamily: fonts.Nunito[600],
      fontSize: 20,
    }
})
