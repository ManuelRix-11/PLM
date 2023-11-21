import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import StaffCardComponent from '../components/StaffCardComponent';


const ContactsScreen = ({navigation}) => {
  return (
    <View style={stiloso.bg}>
      <StaffCardComponent></StaffCardComponent>
    </View>
  )
}

const stiloso = StyleSheet.create({
  bg: {
    backgroundColor: "#1e1f22", 
    width: '100%', 
    height: '100%', 
  }
})

export default ContactsScreen;