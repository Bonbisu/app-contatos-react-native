import React, {useEffect} from "react";
import {View,Text,StyleSheet,Platform,FlatList} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho'
import ContatoItem from '../components/ContatoItem'
import { useDispatch, useSelector } from 'react-redux';
import * as contatoActions from '../store/contatos-actions'


// const deletarContato = (indice) => {
//   setContatos(contatos => {
//     setContadorContatos(contadorContatos - 2)
//     return contatos.filter(contato =>  contato.key !== indice);
//   })

// }


const ListaContatoTela = (props) => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(contatoActions.listarContatos())
  });
const contatos = useSelector(estado => estado.contatos.contatos);
    return (
      <FlatList
        data={contatos}
        keyExtractor={contatos => contatos.id}
        renderItem={(contatos) => (
          // FlatList sempre mapeia o item da lista colocada em data para um objeto {item: contato}
          <ContatoItem
            index={contatos.item.id}
            telefone={contatos.item.telefone}
            nome={contatos.item.nome}
            lat={contatos.item.lat}
            lng={contatos.item.lng}
            data={contatos.item.data}

            // onDelete={deletarContato}
            imagem={contatos.item.imagemURI}
          />
         )}
      />
    )
};


ListaContatoTela.navigationOptions = dadosNavegacao => {
    return {
      headerTitle: "Lista de Contatos",
      headerRight: () =>{
        return (
          <HeaderButtons
            HeaderButtonComponent={BotaoCabecalho}>
            <Item 
              title="Adicionar"
              iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
              onPress={() => {
                dadosNavegacao.navigation.navigate ("CadastroContado");
              }}
            />
          </HeaderButtons>
          
        )
      }  
    }
  }
const style = StyleSheet.create({

});

export default ListaContatoTela;