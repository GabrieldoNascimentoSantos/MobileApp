import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet,ImageBackground, TouchableOpacity, ScrollView } from "react-native";

export default function Digito({navigation}){

  return(
    <View >
      
     <ImageBackground source={require('../../../assets/cantina.png')}  style={{width: 370,height: 430, marginTop: -89, left:150}}/>
     <ImageBackground source={require('../../../assets/Sorriso.png')}  style={{width: 80,height: 80, marginTop: -299, marginLeft: 20}}/>

     <TouchableOpacity onPress={() => navigation.navigate('AlterarSenha')}>
        <Text style={styles.botao}>Verificar</Text>
      </TouchableOpacity>

    <TextInput placeholder='Digito' style={styles.textInput}/>

     <ImageBackground source={require('../../../assets/cantina2.png')}  style={{width: 370,height: 400, marginTop: 260, left:-70}}/>

     <Text style={{marginTop: -709, marginLeft: 45, fontSize:24}}>Digite o número {'\n'}recebido em seu email</Text>

     
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    
  },
  TouchableOpacity:{
    top: 161
  },
  textInput:{
    width:'80%',
    height:60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50,
    marginBottom:-165,
    marginTop: 220,
    paddingLeft:20,
    shadowColor: '#171717',
    shadowOffset: {width: -9, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginLeft: 25,
    backgroundColor: '#fff'
  },
  Text:{
    color: "#000",
    marginLeft: 30,
  },
  botao:{
    width:159,
    height: 50,
    color:"#000", 
    display:'flex',
    fontSize:25,
    padding: 5,
    borderRadius:50,
    position:'absolute',
    backgroundColor:'#fff',
    textAlign: 'center',
    alignSelf:'center',
    top:-580,
    marginTop: 905, 
  }
});