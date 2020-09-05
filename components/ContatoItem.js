import React from 'react';
import {
    View,
    Text,
    StyleSheet,

    TouchableOpacity
} from 'react-native'

const ContatoItem = (props) => {

    return (
        <TouchableOpacity
            onPress={() => props.onApagarLembrete(props.index)}
        >

            <View style={estilos.itemNaLista}>
                <Text>ID: {props.index}</Text>
                <Text>Nome: {props.contato.nome}</Text>
                <Text>Telefone: {props.contato.telefone}</Text>
            </View>
        </TouchableOpacity>
    );
};

const estilos = StyleSheet.create({
    itemNaLista: {
        padding: 12,
        // borderBottomColor: "#000",
        // borderColor: 'black',
        
        marginBottom: 7,
        // borderRadius: 7,
        borderColor: '#DDD',
        borderWidth:1,
        borderLeftWidth:4,
        borderLeftColor: '#4CAF50'

    }
})

export default ContatoItem;