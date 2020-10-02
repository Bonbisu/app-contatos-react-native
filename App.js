import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import ContatoItem from './components/ContatoItem'
import ContatoInput from './components/ContatoInput'
import AgendaNavigator from './navigator/AgendaNavigator';



export default function App() {





  const deletarContato = (indice) => {
    setContatos(contatos => {
      setContadorContatos(contadorContatos - 2)
      return contatos.filter(contato =>  contato.key !== indice);
    })

  }

  // const adicionarContato = (contato) => {
  //   if (contato !== undefined && contato.nome !== '' && contato.telefone !== '') {
  //     setContatos(() => {
  //       setContadorContatos(contadorContatos + 2)
  //       return [...contatos, { value: contato, key: contadorContatos.toString() }]
  //     })
  //   }
  // }

  return (
    <AgendaNavigator />
    // <View style={estilos.mainView}>
    //   {/* usuario insere os contatos aqui */}
    //   <ContatoInput
    //     onAdicionarContato={adicionarContato}
    //   />
    //   <FlatList
    //     data={contatos}
    //     renderItem={(contato) => (
    //       // FlatList sempre mapeia o item da lista colocada em data para um objeto {item: contato}
    //       <ContatoItem
    //         index={contato.item.key}
    //         contato={contato.item.value}
    //         onDeletarContato={deletarContato}
    //       />
    //     )}
    //   />

    // </View>
  );
}


const estilos = StyleSheet.create({
  mainView: { 
    left : "20%",
    top : "10%",
    width : "60%",
    height : 300,
    borderRadius : 20,
    borderStyle : "solid",
    borderWidth :1.5,
    paddingBottom:15,
  
  },
});