import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button,
    TextInput,
    ScrollView
} from 'react-native';
import { useDispatch } from 'react-redux';
import * as contatosActions from '../store/contatos-actions';
import Cores from '../constantes/Cores';
import TiraFoto from '../components/TiraFoto';
import { set } from 'react-native-reanimated';

const CadastroContato = (props) => {
    const dispatch = useDispatch();

    const [nome, setNome] = useState ('');
    const [telefone, setTelefone] = useState ('');
    const [imagemURI, setImagemURI] = useState();

    const fotoTirada = imagemURI => {
        setImagemURI(imagemURI);
    }

    const adicionarContato = () => {
        dispatch(contatosActions.addContato(nome, telefone, imagemURI));
        props.navigation.goBack();
    }

    const capturarNome = (nome) => {
        setNome(nome);
      }
    
    const capturarTelefone = (telefone) => {
    setTelefone(telefone);
    }

    return (
        <ScrollView style={estilos.main}>
            <View style={estilos.form}>
                <Text style={estilos.titulo}>Adicionar Contato</Text>
                    <TextInput 
                        placeholder = "Nome"
                        style={estilos.nomeTextInput}
                        onChangeText={capturarNome}
                        value={nome}
                    />
                    <TextInput 
                        placeholder = "Telefone"
                        style={estilos.telefoneTextInput}
                        onChangeText={capturarTelefone}
                        value={telefone}
                    />
                    <TiraFoto onFotoTirada={fotoTirada}/>
                    <Button
                        title="Adicionar Contato"
                        color={Cores.primary}
                        onPress={adicionarContato}
                    />
            </View>
        </ScrollView>
    )
};

const estilos = StyleSheet.create ({
    form: {
        padding: 50,
        flexDirection: 'column',
        flex: 1
    },
    titulo: {
        fontSize: 18,
        marginBottom: 16,
        borderRadius:25
    },
    nomeTextInput: {
        borderBottomColor: 'black',
        borderBottomWidth:1, 
        marginBottom: 4,
        padding: 12,
    },
    telefoneTextInput: {
    borderBottomColor: 'black',
    borderBottomWidth:1, 
    marginBottom: 4,
    padding: 12,
    },
    main :{
      left : "20%",
      top : "10%",
      width : "60%",
      height : 300,
      borderRadius : 20,
      borderStyle : "solid",
      borderWidth :1.5,
      paddingBottom:15,
      marginBottom: 20
    }
});

export default CadastroContato;
