import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export default function AlterarSenha({navigation}) {
  
  const [novaSenha, setSenha] = useState('');

  function createSimpleAlert() {

    if (cpf === '' || senha === '' ||  nome === '' || email === '') {
        
      Alert.alert(
        "ATENÇÃO!",
        "Preencha todos os campos"
  )
      
      return;
    }
    const data = {
      cpf, senha, nome, email
    }
    console.log(data);
  }  

  return (
    <View>
      <StatusBar hidden/>
      <ImageBackground source={require('../../../assets/cantina.png')}  style={{width: 370,height: 430, marginTop: -89, left:150}}/>
      <ImageBackground source={require('../../../assets/Sorriso.png')}  style={{width: 80,height: 80, marginTop: -299, marginLeft: 20}}/>
     
      <TouchableOpacity onPress={() => navigation.navigate('AlterarSenha')}>
        <Text style={styles.botao}>Alterar</Text>
      </TouchableOpacity>

      <TextInput placeholder='Nova Senha' secureTextEntry={true} style={styles.textInput} onChangeText={text=>setSenha(text)} name={novaSenha}/>

      <ImageBackground source={require('../../../assets/cantina2.png')}  style={{width: 370,height: 400, marginTop: 250, left:-70}} />

      <Text style={{marginTop: -700, marginLeft: 45, fontSize:24}}>Alterar Senha</Text>
    </View>



  );    
}

const styles = StyleSheet.create({
  container: {
      
  },
  TouchableOpacity:{
    top: 161
  },
  Text:{
    color: "#000",
  },
  botao:{
    width:130,
    height: 50,
    color:"#000", 
    display:'flex',
    fontSize:25,
    padding: 5,
    borderRadius:50,
    position:'absolute',
    backgroundColor: "#fff",
    textAlign: 'center',
    alignSelf:'center',
    top:-550,
    marginTop: 905
  },
  textInput:{
    width:'80%',
    height:60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50,
    marginBottom:-165,
    marginTop: 250,
    paddingLeft:20,
    backgroundColor:'#fff',
    shadowColor: '#171717',
    shadowOffset: {width: -9, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderStartWidth: 3,
    marginLeft: 25,
  }
});