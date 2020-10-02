import React from 'react'
import {createStackNavigator} from 'react-navigation-stack';
import {Plataform} from 'react-native'
import CadastroContado from '../telas/CadastroContato';
import ListaContatoTela from '../telas/ListaContato';
import { createAppContainer } from 'react-navigation';


const AgendaNavigator = createStackNavigator({
    ListaContado : ListaContatoTela,
    CadastroContado  : CadastroContado
})



export default createAppContainer (AgendaNavigator);