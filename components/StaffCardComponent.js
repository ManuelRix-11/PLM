import React from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight, Alert, ScrollView } from 'react-native';
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
    <View style={{width: '100%', height: '100%'}}>
      <ScrollView contentContainerStyle={stiloso.scrollW} scrollEnabled>
      {/* Card 1 */}
        <View style={stiloso.cardWrapper}>
          <Text style={[stiloso.ruolo, {top: hp('20%'), right: wp('6.3%')}]}>Presidente</Text>
          <LinearGradient start={{x: .5, y: 0}} end={{x: .5, y: .5}} colors={['#b88db8', 'transparent']} style={[stiloso.card, {borderColor: '#b88db8'}]}>
            <Image source={require('../assets/Siri.png')} style={{width: wp('20%'), height: hp('40%')}}></Image>
            <Text style={stiloso.nome}>Siria Donniacuo</Text>
            <View>
              <TouchableHighlight onPress={() => addNumber("Siria Donniacuo", "+393454434403")} style={[stiloso.bottone, {backgroundColor: '#8a548a'}]}>
                <Text style={{color: '#f2f3f5', textAlign: 'center'}}>Contatto</Text>
              </TouchableHighlight>
            </View>
          </LinearGradient>
        </View>

        {/* Card 2 */}
        <View style={stiloso.cardWrapper}>
          <Text style={[stiloso.ruolo, {top: hp('22%'), right:wp('5.2%'), fontSize: hp('4%')}]}>Vice-Presidente</Text>
          <LinearGradient start={{x: .5, y: 0}} end={{x: .5, y: .5}} colors={['#3b66b8', 'transparent']} style={[stiloso.card, {borderColor: '#3b66b8'}]}>
            <Image source={require('../assets/ER2.png')} style={{width: wp('20%'), height: hp('40%')}}></Image>
            <Text style={stiloso.nome}>Emanuele Ragozzini</Text>
            <View>
              <TouchableHighlight onPress={() => addNumber("Emanuele Ragozzini", "+393401519413")} style={[stiloso.bottone, {backgroundColor: '#2b4d8c'}]}>
                <Text style={{color: '#f2f3f5', textAlign: 'center'}}>Contatto</Text>
              </TouchableHighlight>
            </View>
          </LinearGradient>
        </View>
        
        {/* Card 3 */}
        <View style={stiloso.cardWrapper}>
          <Text style={[stiloso.ruolo, {top: hp('20%'), right: wp('7.2%')}]}>Associato</Text>
          <LinearGradient start={{x: .5, y: 0}} end={{x: .5, y: .5}} colors={['#d1454e', 'transparent']} style={[stiloso.card, {borderColor: '#d1454e'}]}>
            <Image source={require('../assets/Red.png')} style={{width: wp('20%'), height: hp('40%')}}></Image>
            <Text style={stiloso.nome}>Giovanni Russo</Text>
            <View>
              <TouchableHighlight onPress={() => addNumber("Giovanni Russo", "+393409528517")} style={[stiloso.bottone, {backgroundColor: '#a31f28'}]}>
                <Text style={{color: '#f2f3f5', textAlign: 'center'}}>Contatto</Text>
              </TouchableHighlight>
            </View>
          </LinearGradient>
        </View>
        
        {/* Card4 */}
        <View style={stiloso.cardWrapper}>
          <Text style={[stiloso.ruolo, {top: hp('20%'), right: wp('7.2%')}]}>Associata</Text>
          <LinearGradient start={{x: .5, y: 0}} end={{x: .5, y: .5}} colors={['#42bec2', 'transparent']} style={[stiloso.card, {borderColor: '#42bec2'}]}>
            <Image source={require('../assets/Cam.png')} style={{width: wp('20%'), height: hp('40%')}}></Image>
            <Text style={stiloso.nome}>Camilla Iommazzo</Text>
            <View>
              <TouchableHighlight onPress={() => addNumber("Camilla Iommazzo", "+393914647439")} style={[stiloso.bottone, {backgroundColor: '#23787a'}]}>
                <Text style={{color: '#f2f3f5', textAlign: 'center'}}>Contatto</Text>
              </TouchableHighlight>
            </View>
          </LinearGradient>
        </View>

      </ScrollView>
    </View>
    
  )
}

const stiloso = StyleSheet.create({
  scrollW: {
    marginTop: hp('2%'),
    paddingHorizontal: wp('10%'),
    paddingBottom: hp('7%'),
    rowGap: hp('5%'),
    marginBottom: hp('50%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  },
  cardWrapper: {
    flexDirection: 'row'
  },
  card: {
    borderWidth: .3, 
    borderRadius: 0, 
    gap: 5,
    paddingBottom: 5
  },
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
    borderRadius: 0, 
    width: '90%',
    alignSelf: 'center', 
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%')
  },
})

export default StaffCardComponent;