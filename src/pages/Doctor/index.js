import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { DoctorCatergory, Gap, HomeProfile, NewsItem, RatedDoctor } from '../../components'
import { colors, fonts, getData } from '../../utils'
import { DummyDoctor1, DummyDoctor2, DummyDoctor3, JSONCategoryDoctor } from '../../assets'
import { Fire } from '../../config'

const Doctor = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    getNews();
    getTopRatedDoctor();
    getCategoryDoctor();
    // return () => {
    //   cleanup
    // }
  }, [])
  const getTopRatedDoctor = () => {
    Fire.database()
    .ref('doctors/')
    .orderByChild('rate')
    .limitToLast(3)
    .once('value')
    .then(res => {
      console.log('data: ', res.val())
      if(res.val()){
        const oldData = res.val();
        const data = [];
        Object.keys(oldData).map(key => {
          data.push({
            id: key,
            data: oldData[key]
          })
        })
        setDoctors(data);
      }
    }).catch(error => {
      const errorMessage = error.message
      showError(errorMessage)
    })
  }
  const getCategoryDoctor = () => {
    Fire.database()
    .ref('category_doctor/')
    .once('value')
    .then(res => {
      if(res.val()){
        const data = res.val();
        const filterData = data.filter(el => el !== null)
        setCategoryDoctor(filterData)
      }
    }).catch(error => {
      const errorMessage = error.message
      showError(errorMessage)
    })
  }
  const getNews = () => {
    Fire.database()
    .ref('news/')
    .once('value')
    .then(res => {
      console.log('data: ', res.val())
      if(res.val()){
        const data = res.val();
        const filterData = data.filter(el => el !== null)
        setNews(filterData)
      }
    }).catch(error => {
      const errorMessage = error.message
      showError(errorMessage)
    })
  }
    return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <HomeProfile onPress={() => navigation.navigate('UserProfile')}/>
          <Gap height={30}/>
          <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={16}/>
                {
                  categoryDoctor.map(item => {
                    return <DoctorCatergory key={item.id} category={item.category} onPress={() => navigation.navigate('ChooseDoctor', item)}/>
                  })
                } 
                <Gap width={6}/>
              </View>
            </ScrollView>
          </View>
          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          {doctors.map(doctor => {
            return <RatedDoctor onPress={() => navigation.navigate('DoctorProfile', doctor)} key={doctor.id} name={doctor.data.fullName} desc={doctor.data.profession} avatar={{uri: doctor.data.photo}}/>
          })}
          <Text style={styles.sectionLabel}>Good News</Text>
          {news.map(item => {
            return (
              <NewsItem key={item.id} title={item.title} date={item.date} image={item.image}/>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default Doctor

const styles = StyleSheet.create({
  page: {
   
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.Nunito[600],
    color: colors.text.primary,
    maxWidth: 215,
  },
  category: {
    flexDirection: 'row',
    marginTop: 16
   
  },
  wrapperScroll: {
    marginHorizontal: -16
  },
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.Nunito[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  }
})
