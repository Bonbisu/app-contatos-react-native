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
import CapturaLocalizacao from '../components/capturaLocalicazao';

const CadastroContato = (props) => {
    const dispatch = useDispatch();

    const [nome, setNome] = useState ('');
    const [telefone, setTelefone] = useState ('');
    const [imagemURI, setImagemURI] = useState();
    const [localizacao,setLocalizacao] = useState();

    const fotoTirada = imagemURI => {
        setImagemURI(imagemURI);
    }

    const adicionarContato = async() => { 
        var data = new Date();
        console.log('adicionando',nome, telefone, imagemURI,(localizacao||{}).lng,(localizacao||{}).lat,data);
        await dispatch(contatosActions.addContato(nome, telefone, imagemURI,(localizacao||{}).lng,(localizacao||{}).lat,data));
       
        props.navigation.goBack();
    }

    const capturarNome = (nome) => {
        setNome(nome);
      }
    
    const capturarTelefone = (telefone) => {
    setTelefone(telefone);
    }

    const getLocalizacao = localizacao =>{
        setLocalizacao(localizacao);
    }

    

    return (
        <ScrollView>
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
                    <CapturaLocalizacao onLocalizacaoCapturada={getLocalizacao}/>
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
});

export default CadastroContato;
