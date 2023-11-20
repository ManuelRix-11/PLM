import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { widthPercentageToDP as wp , heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HeaderComponent = () => {
  return (
    <View style={{backgroundColor: "#1e1f22", width: wp('100%'), alignItems: 'center', paddingTop: hp('3%')}}>
      <Image source={require("../assets/liberamente.png")} style={{marginBottom: 7, borderRadius: wp('100%'), width: wp('12%'), height: hp('17%')}}></Image>
      <Text style={{color: "#f2f3f5", fontWeight: 'bold', fontSize: 25}}>Benvenuto!</Text>
    </View>
  )
}

export default HeaderComponent;