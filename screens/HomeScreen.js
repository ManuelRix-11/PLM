import React from 'react'
import SocialButtonComponent from '../components/SocialButtonComponent'
import { StyleSheet, View, Text } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
        <View style = {style.bg}>
            <SocialButtonComponent navigation={navigation}/>
        </View>
  )
}

const style = StyleSheet.create({
    bg : {backgroundColor: '#1e1f22', width: '100%', height: '100%'}
})

export default HomeScreen;