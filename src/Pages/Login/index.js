import React, {useState} from "react";
import { Component } from "react";
import { View, Text, TextInput, StyleSheet,ImageBackground, TouchableOpacity, Alert } from "react-native";

export default function Login({navigation}){

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  function handleSignIn() {
    if (cpf === '' || senha === '' ||  nome === '' || email === '') {
      alert("Preencha todos os campos")
      return;
    }
    const data = {
      cpf, senha, nome, email
    }
    console.log(data);
  }


        return(

            <View >

             <ImageBackground source={require('../../../assets/Login.png')}  style={{width: 450,height: 880, marginTop: -19}}/>
      

      <TextInput placeholder='Seu CPF ou NIF' style={styles.textInput} onChangeText={setCpf}  />
      <TextInput placeholder='Sua senha...' style={styles.textInput} onChangeText={setSenha}  />
      <TouchableOpacity onPress={() => navigation.navigate('Senha')}>
        <Text style={styles.botao2}>Esqueci minha senha</Text>
      </TouchableOpacity>
      <ImageBackground source={require('../../../assets/Sorriso.png')}  style={{width: 80,height: 80, marginTop: -600, marginLeft: 10}}/>
      
      <TouchableOpacity onPress={handleSignIn}>
        <Text style={styles.botao}>Logar</Text>
      </TouchableOpacity>

             


            </View>
        );
}


 
const styles = StyleSheet.create({
  container: {
  },
  textInput:{
    width:'80%',
    height:60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:50,
    marginBottom:200,
    marginTop: -345,
    paddingLeft:20,
    shadowColor: '#171717',
    shadowOffset: {width: -9, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: "#fff",
    marginLeft: 25,
  },
  Text:{
    color: "#000",
    marginLeft: 30,
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
    top:-420,
    marginTop: 905
  },
  botao2:{
    width:400,
    color:"#000", 
    display:'flex',
    fontSize:15,
    position:'absolute',
    top:-135,
    padding: 30,
    
    marginLeft: 50,
    borderRadius:50,
    alignSelf:'center',
  },
  errorMessage:{

    fontSize: 12,

    color:"red",

    fontWeight:"bold",

    paddingLeft:20

}
  
  
});



