import React, {Component} from "react";
import {View, Text} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/Pages/Home/';
import Login from './src/Pages/Login/index';
import Cadastro from './src/Pages/Cadastro/index'
import Senha from './src/Pages/Senha/index'
import Digito from "./src/Pages/Senha/Digito";
import AlterarSenha from "./src/Pages/Senha/Alterar";



export default  function App(){
  const Stack = createNativeStackNavigator()

    return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Senha" component={Senha}/>
        <Stack.Screen name="Digito" component={Digito}/>
        <Stack.Screen name="AlterarSenha" component={AlterarSenha}/>


      </Stack.Navigator>
    </NavigationContainer>
    )
  }
