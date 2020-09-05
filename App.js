import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import ContatoItem from './components/ContatoItem'
import ContatoInput from './components/ContatoInput'

const estilos = StyleSheet.create({
  telaPrincipalView: { padding: 50 },
});

export default function App() {

  // se usarmos uma funçao ao invez de classe podemos usar state com as sequintes declarações
  const [contatos, setContatos] = useState([]);
  const [contadorContatos, setContadorContatos] = useState(10);

  const apagarContato = (indice) => {
    console.log('💩 apagar', indice)
    setContatos(contatos => {
      return contatos.filter(contato =>  contato.key !== indice);
    })

  }

  const adicionarContato = (contato) => {
console.log('contato novo', contato)
    if (contato !== undefined && contato.nome !== '' && contato.telefone !== '') {
      setContatos(() => {
        setContadorContatos(contadorContatos + 2)
        return [...contatos, { value: contato, key: contadorContatos.toString() }]
      })
    }
  }

  return (
    <View style={estilos.telaPrincipalView}>
      {/* usuario insere os contatos aqui */}
      <ContatoInput
        onAdicionarContato={adicionarContato}
      />
      <FlatList
        data={contatos}
        renderItem={(contato) => (
          // FlatList sempre mapeia o item da lista colocada em data para um objeto {item: contato}
          <ContatoItem
            index={contato.item.key}
            contato={contato.item.value}
            onapagarContato={apagarContato}
          />
        )}
      />

    </View>
  );
}


