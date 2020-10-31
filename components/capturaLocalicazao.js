import React, { useState } from 'react';
import {View,Button,Text,ActivityIndicator,Alert,StyleSheet} from 'react-native';

import Cores from  '../constantes/Cores';

import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions';
import PreviewMapa from './previewMapa';

const CapturaLocalizacao = (props) =>{

    const [loading,setLoading] = useState(false);
    const [localizacao,setLocalizacao] = useState();
    const verificarPermissao = async () =>  {
        let resultado; 
        try {
            resultado = await Location.requestPermissionsAsync()
            // resultado = await Permissions.askAsync(Permissions.LOCATION);
        } catch (error) {
            console.log('error getting permission', error)
        }
        if(resultado.status !=='granted'){
            Alert.alert(
                "Sem permissão para uso do mecanismo de localização",
                "É preciso liberar acesso de localiziação",
                [{text : 'Ok'}]
            )
            return false;
        }
        props.onLocalizacaoCapturada (localizacao);
        return true;
    }

    const capturarLocalizacao = async () =>{
        let permitido;
        try {
            permitido = await verificarPermissao();
        } catch (error) {
            console.log('sem permissão',error)
        }
        if (permitido) {
            setLoading(true);
            let location;
            try {
                location = await Location.getCurrentPositionAsync({ timeout: 8000 });
            } catch (err) {
                Alert.alert(
                    "Impossivel obter localizacao",
                    "Tente novamente mais tarde ou escolha uma no mapa",
                    [{ text: "ok" }]
                )
            };
            console.log('localização', location);
            let loc = {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
            setLocalizacao(loc);
            setLoading(false);
        props.onLocalizacaoCapturada (loc);

        }

    }

    return (
        <View style={estilos.capturarLocalizacao} localizacao = {localizacao}>
            <PreviewMapa style = {estilos.previewDoMapa} localizacao={localizacao}>
            {
                loading ? <ActivityIndicator 
                size='large'
                color={Cores.primary}
                />
                : <Text>Nenhuma localização disponível</Text>
            }
                
            </PreviewMapa>
            <Button 
                title = 'obter localização'
                color = {Cores.primary}
                onPress={capturarLocalizacao}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    capturarLocalizacao : {
        marginBottom : 16,
    },
    previewDoMapa : {
        marginBottom : 12,
        width: '100%',
        height : 150,
        borderColor : "#DDD",
        borderWidth : 1,
        justifyContent : "center",
        alignItems : 'center'

    }
});

export default CapturaLocalizacao;