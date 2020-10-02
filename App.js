import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import AgendaNavigator from './navigator/AgendaNavigator';
import { Provider } from 'react-redux';
import contatosReducers from './store/contatos-reducers'
import { 
  createStore, 
  combineReducers, 
  applyMiddleware 
} from 'redux';
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  contatos: contatosReducers,
});

const store = createStore (rootReducer, applyMiddleware(reduxThunk));

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
    <Provider store={store} style={estilos.mainView}>
      <AgendaNavigator />
    </Provider>

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