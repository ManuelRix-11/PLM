import React from 'react'
import SocialButtonComponent from '../components/SocialButtonComponent'
import { StyleSheet, View, Text } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const HomeScreen = ({navigation}) => {
  return (
        <View style = {style.bg}>
            <SocialButtonComponent navigation={navigation}/>
            <Text style={{color:"#f2f3f5", textAlign: 'center', paddingBottom: hp('5%')}}>Un ringraziamento speciale ai ragazzi alla classe 3 Resto 2(COORTE 2020/21)</Text>
        </View>
  )
}

const style = StyleSheet.create({
    bg : {backgroundColor: '#1e1f22', width: '100%', height: '100%'}
})

export default HomeScreen;