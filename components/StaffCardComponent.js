import React from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import * as Contacts from 'expo-contacts';

const StaffCardComponent = ({navigation}) => {

  async function addNumber(nome, numero) {
    try {
      const contatto = {
      [Contacts.Fields.FirstName]: nome,
      [Contacts.Fields.PhoneNumbers]: [
        {
          number: numero,
          isPrimary: true,
          countryCode: "IT",
          label: "main",
        },
      ]
    }

      await Contacts.addContactAsync(contatto);
      Alert.alert("Contatto correttamente inserito");
    }catch(err){
      Alert.alert("ERRORE: Contatto non inserito"); 
    }
  };

  return (
    <View style={stiloso.wrapper}>
      {/* Card 1 */}
      <View style={{flexDirection: 'row'}}>
        <Text style={stiloso.ruolo}>Presidente</Text>
        <LinearGradient start={{x: .5, y: 0}} end={{x: .5, y: .5}} colors={['#b88db8', 'transparent']} style={stiloso.card}>
          <Image source={require('../assets/Siri.png')} style={{width: wp('20%'), height: hp('40%')}}></Image>
          <Text style={stiloso.nome}>Siria Donniacuo</Text>
        
          <View>
            <TouchableHighlight onPress={() => addNumber("Siria Donniacuo", "+393454434403")} style={[stiloso.bottone, {backgroundColor: '#b88db8'}]}>
              <Text style={{color: '#f2f3f5', textAlign: 'center'}}>Contatto</Text>
            </TouchableHighlight>
          </View>
        </LinearGradient>
      </View>
      

      {/* Card 2 */}
      <View style={{flexDirection: 'row'}}>
        <Text style={stiloso.ruolo}>Vice-Presidente</Text>
        <LinearGradient start={{x: .5, y: 0}} end={{x: .5, y: .5}} colors={['#3b66b8', 'transparent']} style={stiloso.card}>
          <Image source={require('../assets/ER2.png')} style={{width: wp('20%'), height: hp('40%')}}></Image>
          <Text style={stiloso.nome}>Emanuele Ragozzini</Text>
          <View>
            <TouchableHighlight onPress={() => addNumber("Emanuele Ragozzini", "+393401519413")} style={[stiloso.bottone, {backgroundColor: '#3b66b8'}]}>
              <Text style={{color: '#f2f3f5', textAlign: 'center'}}>Contatto</Text>
            </TouchableHighlight>
          </View>
        </LinearGradient>
      </View>
      
      
      <View style={{flexDirection: 'row'}}>
        <Text style={stiloso.ruolo}>Associato</Text>
        <LinearGradient start={{x: .5, y: 0}} end={{x: .5, y: .5}} colors={['#d1454e', 'transparent']} style={stiloso.card}>
          <Image source={require('../assets/Red2.png')} style={{width: wp('20%'), height: hp('40%')}}></Image>
          <Text style={stiloso.nome}>Giovanni Russo</Text>
          <View>
            <TouchableHighlight onPress={() => addNumber("Giovanni Russo", "+393409528517")} style={[stiloso.bottone, {backgroundColor: '#d1454e'}]}>
              <Text style={{color: '#f2f3f5', textAlign: 'center'}}>Contatto</Text>
            </TouchableHighlight>
          </View>
        </LinearGradient>
      </View>
      

    </View>
  )
}

const stiloso = StyleSheet.create({
  wrapper: {marginTop: hp('2%') ,flex:1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'},
  card: {borderWidth: 1, borderRadius: 30, gap: 5},
  nome: {
    color: '#f2f3f5', 
    textAlign: 'center', 
    fontSize: 20
  },
  ruolo: {
    color: '#f2f3f5', 
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'flex-start',
    transform: [{rotate: '-90deg'}],
    zIndex: 9,
    position: 'absolute',
    fontSize: hp('6%'),
    letterSpacing: 5
  },
  bottone: {
    borderWidth: 1, 
    borderRadius: 10, 
    alignSelf: 'center', 
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%')
  },
})

export default StaffCardComponent;