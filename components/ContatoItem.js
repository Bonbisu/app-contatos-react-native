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
            onLongPress={() => props.onApagarContato(props.index)}
        >

            <View style={estilos.itemNaLista}>
                <View style={estilos.tag}>
                    <Text style={estilos.tagText}>ID: {props.index}</Text>
                </View>
                <View>
                    <Text style={estilos.label}>
                        Nome:
                    </Text>
                    <Text style={estilos.text}>
                        {props.contato.nome}
                    </Text>
                </View>
                <View>
                    <Text style={estilos.label}>
                        Telefone:
                    </Text>
                    <Text style={estilos.text}>
                        {props.contato.telefone}

                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const pallete = {
    green: '#4CAF50',
    white: '#fff'
}

const estilos = StyleSheet.create({
    itemNaLista: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        padding: 12,
        marginBottom: 7,
        borderColor: '#DDD',
        borderWidth:1,
        borderLeftWidth:4,
        borderLeftColor: pallete.green

    }, 
    tag:{
        backgroundColor: pallete.green,
        padding: 7,
        paddingHorizontal: 21,
        borderRadius:100,
    },
    tagText:{
        color: pallete.white
    },
    label:{
        // color: pallete.white,
        fontWeight: 'bold'
    },
    text:{
        // color: pallete.white
    },

})

export default ContatoItem;