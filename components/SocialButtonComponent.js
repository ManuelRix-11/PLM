import React from 'react';
import { Linking, TouchableHighlight } from 'react-native';
import { View, Image, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SocialButtonComponent = ({navigation}) => {
  return (
    <View id='riga1' style={{flex:1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
      
      {/* Bottone IG */}
      <View style={{padding:10}}>
        <TouchableHighlight onPress={() => Linking.openURL("https://www.instagram.com/associazione_libera_mente_/?hl=it")}>
          <LinearGradient start={{x: .1, y:.2}} colors={['#f9ce34', '#ee2a7b', '#6228d7']} style={stiloso.bottone}>
            <Image source={require("../assets/ig_logo.png")} style={{width: 40, height:40}}></Image>
            <Text style={{color:"#f2f3f5", fontSize: 17, alignSelf: 'flex-end', fontWeight: '500'}}>Instagram</Text>
          </LinearGradient>
        </TouchableHighlight>
      </View>

      {/* Bottone Notion */}
      <View style={{padding:10}}>
        <TouchableHighlight onPress={() => Linking.openURL("https://www.notion.so/Informatica-55a0ad8a0cb84ebbbf2d1096fddc997f?pvs=4")}>
          <LinearGradient start={{x: 1, y: 0}} end={{x: .1, y: .1}} colors={['white', 'black']} style={stiloso.bottone}>
            <Image source={require("../assets/notion_logo.png")} style={{width: 40, height:40, alignSelf: 'flex-end'}}></Image>
            <Text style={{color:"#f2f3f5", fontSize: 17, fontWeight: '500'}}>I nostri appunti</Text>
          </LinearGradient>
        </TouchableHighlight>
      </View>

      {/* Bottone TG */}
      <View style={{padding:10}}>
        <TouchableHighlight onPress={() => Linking.openURL("https://t.me/joinchat/Rj_K6FZDcobzlViX")}>
          <LinearGradient start={{x: 1, y: .5}} end={{x: -.1, y: .1}} colors={['#0061FF','#BFF9FF']} style={stiloso.bottone}>
            <Image source={require("../assets/telegram_logo.png")} style={{width: 40, height:40}}></Image>
            <Text style={{color:"#f2f3f5", fontSize: 17, alignSelf: 'flex-end', fontWeight: '500'}}>Videolezioni</Text>
          </LinearGradient>
        </TouchableHighlight>
      </View>

      {/* Bottone FAQ */}
      <View style={{padding:10}}>
        <TouchableHighlight onPress={() => navigation.navigate('FAQ')}>
          <LinearGradient start={{x: -.4, y: .1}} end={{x: 1, y: 1}} colors={['#2c6cbc','#71c3f7', '#f6f6f6']} style={stiloso.bottone}>
            <Image source={require("../assets/info_logo.png")} style={{width: 40, height: 40, alignSelf: 'flex-end'}}></Image>
            <Text style={{color:"#f2f3f5", fontSize: 17, fontWeight: '500'}}>FAQ</Text>
          </LinearGradient>
        </TouchableHighlight>
      </View>
      
      {/* Bottone Contatti */}
      <View style={{padding:10}}>
        <TouchableHighlight onPress={() => navigation.navigate('Contattaci')}>
          <LinearGradient start={{x: 0, y: .1}} end={{x: .5, y: .3}} colors={['#e7f9ed','#c2efdf', '#66ac93']} style={stiloso.bottone}>
            <Image source={require("../assets/contacts_logo.png")} style={{width: 40, height: 40}}></Image>
            <Text style={{color:"#f2f3f5", fontSize: 17, alignSelf: 'flex-end', fontWeight: '500'}}>Contattaci</Text>
          </LinearGradient>
        </TouchableHighlight>
      </View>

    </View>
  )
}

const stiloso = StyleSheet.create({
  bottone: {
    padding: 20,
    gap: hp('7%'),
    width: wp('40%'),
    height: hp('20%'),
    borderRadius: 20
  }
})

export default SocialButtonComponent;