import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet, TouchableOpacity
} from 'react-native';

import Cores from '../constantes/Cores';

const ContatoItem = (props) => {
    return (
            <TouchableOpacity onLongPress={props.onDelete} style={estilos.contatoItem}>
                <Image 
                    style={estilos.imagem}
                    source={{uri: props.imagem}}
                />
                <View style={estilos.tela}>
                    <Text style={estilos.nomeNaListaView}>Nome : {props.nome}</Text>
                    <Text style={estilos.telefoneNaListaView}>Telefone: {props.telefone}</Text>
                </View>
            </TouchableOpacity>
    );
};

const estilos = StyleSheet.create({
    contatoItem: {
        flex: 1,
        justifyContent: 'center',
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        paddingVertical: 16,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#CCC',
        borderColor: Cores.primary,
        borderWidth: 1
    },
    tela: {       
        padding: 12,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        marginBottom: 8,
        borderRadius: 8,
        // textAlign: 'center',
        marginLeft: 10
    },
    nomeNaListaView: {
        color: Cores.primary,
        fontWeight: 'bold'   
    },
    telefoneNaListaView: {
        // textAlign: 'left'
    }
})

export default ContatoItem;