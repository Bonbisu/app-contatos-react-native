import React,{useState} from "react";
import {View,Text,StyleSheet} from 'react-native';
import ContatoInput from '../components/ContatoInput'




const style = StyleSheet.create({

});

export default function cadastroContato (){
  const [contatos, setContatos] = useState([]);
  const [contadorContatos, setContadorContatos] = useState(10);
  const adicionarContato = (contato) => {

    if (contato !== undefined && contato.nome !== '' && contato.telefone !== '') {
      setContatos(() => {
        setContadorContatos(contadorContatos + 2)
        return [...contatos, { value: contato, key: contadorContatos.toString() }]
      })
    }
  }
  
// const cadastroContato = (contato) => {

    return (
        <ContatoInput
          onAdicionarContato={adicionarContato}
        />
    )
// };
};