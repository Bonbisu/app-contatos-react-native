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
import { buscarListaContato, deletarListarContato, dropTableContato, init,insertContato } from './helpers/db';


init()
.then(()=>{
  console.log("Worked!!!")
}).catch((err)=>{
  console.log(`Não deu certo: ${err}`);
});

buscarListaContato().then((dados)=>{
  console.log(dados);
}).catch((err)=>{
  console.log(`${err}`);
});

// deletarListarContato();

// dropTableContato();

// insertContato('a','b','c','d','4','6','7');

const rootReducer = combineReducers({
  contatos: contatosReducers,
});

const store = createStore (rootReducer, applyMiddleware(reduxThunk));

export default function App() {

  // const deletarContato = (indice) => {
  //   setContatos(contatos => {
  //     setContadorContatos(contadorContatos - 2)
  //     return contatos.filter(contato =>  contato.key !== indice);
  //   })

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