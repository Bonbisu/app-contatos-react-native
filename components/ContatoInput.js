import React, { useState } from 'react';

import {
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

const ContatoInput = (props) => {

    const [contato, setContato] = useState({ nome: '', telefone: '' });

    const capturarNome = (nome) => {
        // console.log('capturarNome', nome); 
        let c = { ...contato, nome }
        setContato(c);
    }
    const capturarTelefone = (telefone) => {
        // console.log('capturarTelefone', telefone); 
        let c = { ...contato, telefone }
        setContato(c);
    }
    const adicionarContato = (contato) => {
        props.onAdicionarContato(contato);
        // setContato({nome:'', telefone:''});    
    }

    return (
        <View style={estilos.lembreteView}>
            <TextInput placeholder="Nome"
                style={estilos.lembreteTextInput}
                onChangeText={capturarNome}
                value={contato.nome}
            />
            <TextInput placeholder="Telefone"
                style={estilos.lembreteTextInput}
                onChangeText={capturarTelefone}
                value={contato.telefone}
                keyboardType="number-pad"

            />
            <Button
                style={estilos.button}
                color="#855480"
                title="Adicionar"
                onPress={() => adicionarContato(contato)}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    lembreteView: {
        marginBottom: 7
        ,display : 'block'
    },

    lembreteTextInput: {
        borderBottomColor: 'black',
        // borderBottomWidth: 1,
        marginBottom: 7,
        padding: 10,
        width : "50%"
    }

})

export default ContatoInput;