import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { DataTable, List } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const FAQScreen = ({navigation}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleToggle = () => setExpanded(!expanded);

  return (
    <View style={stiloso.bg}>
      <List.AccordionGroup>
        <List.Accordion titleStyle={{color: "#f2f3f5"}} theme={{colors: {background: "#1e1f22"}}} id={1} title="Cos'è l'associazione Libera Mente?" expanded={expanded} onPress={handleToggle}>
          <List.Item title=""/>
        </List.Accordion>

        <List.Accordion titleStyle={{color: "#f2f3f5"}} theme={{colors: {background: "#1e1f22"}}} id={2} title="Quali sono i puntiggi per immatricolarsi ad Informatica?" expanded={expanded} onPress={handleToggle}>
          <DataTable style={stiloso.tavole}>
            <DataTable.Header>
              <DataTable.Title textStyle={{color: "#f2f3f5", fontWeight: 'bold', fontSize: 18}}>Punteggio</DataTable.Title>
              <DataTable.Title textStyle={{color: "#f2f3f5", fontWeight: 'bold', fontSize: 18}}>Esito</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row style={{backgroundColor: "#43755b"}}>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>Maggiore o uguale a 16</DataTable.Cell>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>Immatricolato</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{backgroundColor: "#9c671c"}}>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>Compreso tra 9(incluso) e 15.75</DataTable.Cell>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>Immatricolato con OFA</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{backgroundColor: "#522e2a"}}>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>Minore di 9</DataTable.Cell>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>Anno di Preparazione</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </List.Accordion>

        <List.Accordion titleStyle={{color: "#f2f3f5"}} theme={{colors: {background: "#1e1f22"}}} id={3} title="Come funziona la borsa di studio?" expanded={expanded} onPress={handleToggle}>
          <List.Item title="Ottenimento" titleStyle={{color: "#f2f3f5", fontWeight: 'bold', fontSize: 22}}/>
          <DataTable>

          </DataTable>
        </List.Accordion>
      </List.AccordionGroup>
    </View>
    
  )
}

const stiloso = StyleSheet.create({
  bg: {
    backgroundColor: "#1e1f22", 
    width: '100%', 
    height: '100%', 
  },
  tavole: {
    width: wp('70%'), 
    alignSelf: 'center', 
    borderWidth:1, 
    borderColor: "#f2f3f5", 
    borderTopEndRadius: 20,
    borderTopStartRadius: 20
  }
})

export default FAQScreen;