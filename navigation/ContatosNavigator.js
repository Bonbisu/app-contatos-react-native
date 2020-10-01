import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DetalheDoContatoScreen from '../screens/DetalhesDoContatoScreen';
import ListaDeContatosScreen from '../screens/ListaDeContatoScreen';
import NovoContatoScreen from '../screens/NovoContatoScreen';
import { Platform } from 'react-native'
import Cores from '../constants/Cores'

// mapear o nome da tela para sua referencia importada
const Screens = {
    ListaDeContatos: { screen: ListaDeContatosScreen },
    DetalhesDoContato: { screen: DetalheDoContatoScreen, path: 'contact/:id' },
    NovoContato: { screen: NovoContatoScreen }
}

// como segundo argumento podemos definir alguns parametros como a cor aplicada dependendo
// do sistema operacional do aparelho
const NavigationOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Cores.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? Cores.white : Cores.primary
    }
}

const ContatosNavigator = createStackNavigator(Screens, NavigationOptions);

export default createAppContainer(ContatosNavigator);