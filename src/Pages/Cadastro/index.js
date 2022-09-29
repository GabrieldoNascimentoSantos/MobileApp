import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

export default function Cadastro() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
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


  return (

    <View >



      <ImageBackground source={require('../../../assets/cad.png')} style={{ width: 450, height: 880, marginTop: -19 }} />
      <TextInput placeholder='Seu CPF ou NIF' style={styles.textInput} onChangeText={setCpf}  />
      <TextInput placeholder='Sua senha' style={styles.textInput} onChangeText={setSenha} value={senha} secureTextEntry={true} />
      <TextInput placeholder='Seu e-mail' style={styles.textInput} onChangeText={setEmail} value={email}  />
      <TextInput placeholder='Seu nome' style={styles.textInput} onChangeText={setNome} value={nome}  />

      <ImageBackground source={require('../../../assets/Sorriso.png')} style={{ width: 80, height: 80, marginTop: -450, marginLeft: 10 }} />
      <TouchableOpacity onPress={handleSignIn}>
        <Text style={styles.botao}>Cadastre-se</Text>
      </TouchableOpacity>
      <ImageBackground source={require('../../../assets/Sorriso.png')} style={{ width: 80, height: 80, marginTop: -450, marginLeft: 10 }} />

    </View>

  );
}




const styles = StyleSheet.create({
  container: {
  },
  textInput: {
    width: '80%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 200,
    marginTop: -345,
    paddingLeft: 20,
    shadowColor: '#171717',
    shadowOffset: { width: -9, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: '#fff',
    marginLeft: 25,

  },
  Text: {
    color: "#000",
    marginLeft: 30,
  },
  botao: {
    width: 150,
    color: "#000",
    display: 'flex',
    fontSize: 25,
    position: 'absolute',
    top: 490,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 50,
    alignSelf: 'center',
  }

});
