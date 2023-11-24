import React, { useState } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { DataTable, List } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const FAQScreen = ({navigation}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleToggle = () => setExpanded(!expanded);

  return (
    <ScrollView style={stiloso.bg}>
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
            <DataTable.Row style={{backgroundColor: "#2c523e"}}>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>Maggiore o uguale a 16</DataTable.Cell>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>Immatricolato</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{backgroundColor: "#7a5218"}}>
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
          <DataTable style={stiloso.tavole}>
            <DataTable.Header>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 18, fontWeight: 'bold'}}>CFU</DataTable.Cell>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 18, fontWeight: 'bold'}}>Anno</DataTable.Cell>
            </DataTable.Header>
            <DataTable.Row style={{backgroundColor: "#2c523e"}}>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>Unicamente per ISEE</DataTable.Cell>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>1</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{backgroundColor: "#143a4e"}}>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>25 CFU</DataTable.Cell>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>2</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{backgroundColor: "#143a4e"}}>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>80 CFU</DataTable.Cell>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>3</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row style={{backgroundColor: "#143a4e"}}>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>135 CFU</DataTable.Cell>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>3 semestre del terzo anno o 4 anno</DataTable.Cell>
            </DataTable.Row>

          </DataTable>
          <List.Item title="Mantenimento" titleStyle={{color: "#f2f3f5", fontWeight: 'bold', fontSize: 22}} 
          descriptionStyle={{color: "#f2f3f5"}} description="
          20 CFU ENTRO IL 30/11/2024, chi non consegue i 20 CFU è tenuto a RESTITUIRE la borsa di studio.
          Coloro che invece conseguono i 20 CFU:
          - Diritto di ricevere il 100% della borsa se conseguono i CFU entro il 10/08/2024
          - Diritto di ricevere il 50% della borsa se conseguono i CFU non entro il 10/08 ma entro il 30/11/2024"
          descriptionNumberOfLines={5}></List.Item>
          <List.Item title="Bonus" titleStyle={{color: "#f2f3f5", fontWeight: 'bold', fontSize: 22}}
          descriptionStyle={{color: "#f2f3f5"}} description="
          -5 Crediti da utilizzare nel corso di tutta la carriera universitaria, se utilizzati per la prima volta per l'accesso ai benefici per il secondo anno accademico
          -12 Crediti da utilizzare nel corso di tutta la carriera universitaria, se utilizzati per la prima volta per l'accesso ai benefici per il terzo anno accademico
          -15 Crediti da utilizzare nel corso di tutta la carriera universitaria, se utilizzati per la prima volta per l'accesso ai benefici per gli anni superiori al terzo" descriptionNumberOfLines={20}></List.Item>
          <DataTable style={stiloso.tavole}>
            <DataTable.Header>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 18, fontWeight: 'bold'}}>Graduatoria</DataTable.Cell>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 18, fontWeight: 'bold'}}>Data</DataTable.Cell>
            </DataTable.Header>
            <DataTable.Row>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>Provvisoria</DataTable.Cell>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>30 Settembre 2023</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>Definitive</DataTable.Cell>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>30 Novembre 2023</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>Assestate</DataTable.Cell>
              <DataTable.Cell textStyle={{color: "#f2f3f5", fontSize: 16}}>30 Aprile 2024</DataTable.Cell>
            </DataTable.Row> 
          </DataTable>
          <List.Item title="Pagamento" titleStyle={{color: "#f2f3f5", fontWeight: 'bold', fontSize: 22}} 
          descriptionStyle={{color: "#f2f3f5"}} description="
          -Acconto del 50% erogato entro il 31 Dicembre 2023
          -Restante 50% se hanno seguito le regole di mantenimento di sopra" descriptionNumberOfLines={5}></List.Item>
        </List.Accordion>

        <List.Accordion titleStyle={{color: "#f2f3f5"}} theme={{colors: {background: "#1e1f22"}}} id={4} title="Cosa è la NO TAX AREA? Come funziona?" expanded={expanded} onPress={handleToggle}>
          <List.Item title="NO TAX AREA per gli studenti del primo anno" titleStyle={{color: "#f2f3f5", fontWeight: 'bold', fontSize: 22}}
          descriptionStyle={{color: "#f2f3f5"}} description="
          Gli studenti iscritti al primo anno potranno avere diritto alla NO TAX AREA con unico requisito di avere ISEE ≤ a €30.000."></List.Item>
          <List.Item title="NO TAX AREA per gli studenti di anni superiore al primo" titleStyle={{color: "#f2f3f5", fontWeight: 'bold', fontSize: 22}}
          descriptionStyle={{color: "#f2f3f5"}} description="
          Gli studenti, che rientrano sempre in un ISEE ≤ a €30.000, di anni successivi al primo (fino al primo anno fuori corso) DEVONO AVER CONSEGUITO 25 CFU NELL’ANNO PRECEDENTE per poter mantenere il diritto alla NO TAX AREA."
          descriptionNumberOfLines={3}></List.Item>
        </List.Accordion>
      </List.AccordionGroup>
    </ScrollView>
    
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