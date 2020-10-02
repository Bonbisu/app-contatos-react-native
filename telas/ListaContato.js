import React from "react";
import {View,Text,StyleSheet,Platform} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho'

const ListaContatoTela = (props) => {
    return (
        <View>
            <Text>Tela lista contato</Text>
        </View>
    )
};


ListaContatoTela.navigationOptions = dadosNavegacao => {
    return {
      headerTitle: "Lista de lugares",
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