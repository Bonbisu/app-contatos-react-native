import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import ContatosNavigator from './navigation/ContatosNavigator'
import ContatoItem from './components/ContatoItem'
import ContatoInput from './components/ContatoInput'

const estilos = StyleSheet.create({
  telaPrincipalView: { padding: 50 },
});

export default function App() {

  const mock = { value: { nome: 'Fernando', telefone: '11946546273' }, key: '10' }
  // se usarmos uma funçao ao invez de classe podemos usar state com as sequintes declarações
  const [contatos, setContatos] = useState([mock]);
  const [contadorContatos, setContadorContatos] = useState(10);

  const apagarContato = (indice) => {
    console.log('💩 apagar', indice)
    setContatos(contatos => {
      return contatos.filter(contato => contato.key !== indice);
    })

  }

  const adicionarContato = (contato) => {
    console.log('contato novo', contato)
    if (contato !== undefined && contato.nome !== '' && contato.telefone !== '') {
      setContatos(() => {
        let novoContador = contadorContatos + 2
        setContadorContatos(novoContador)
        return [...contatos, { value: contato, key: novoContador.toString() }]
      })
    }
  }

  return <ContatosNavigator/>
  // return (
  //   <View style={estilos.telaPrincipalView}>
  //     {/* usuario insere os contatos aqui */}
  //     {/* todo: seaparar em uma tela a adiçao de contato  */}
  //     <ContatoInput
  //       onAdicionarContato={adicionarContato}
  //     />
  //     <FlatList
  //       data={contatos}
  //       renderItem={(contato) => (
  //         // FlatList sempre mapeia o item da lista colocada em data para um objeto {item: contato}
  //         <ContatoItem
  //           index={contato.item.key}
  //           contato={contato.item.value}
  //           onApagarContato={apagarContato}
  //         />
  //       )}
  //     />

  //   </View>
  // );
}


