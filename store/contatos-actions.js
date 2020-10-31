export const ADD_CONTATO = 'ADD-CONTATO';
export const LISTA_CONTATO = 'LISTA-CONTATO';
import * as FileSystem from 'expo-file-system'
import { insertContato, buscarListaContato } from '../helpers/db';
import { Platform } from 'react-native';

export const listarContatos = () => {
    return async dispatch => {
        try {
            const resultDB = await buscarListaContato();
            // console.log (resultDB);
            dispatch({ type: LISTA_CONTATO, contatos: resultDB.rows._array || [] })
        }
        catch (err) {
            console.log(err);
            throw err;
        }
    }
}


export const addContato = (nome, telefone, imagemURI, lng, lat, data) => {

    console.log('\n\n\nimagemURI fora',imagemURI)
    return async dispatch => {

        console.log('\n\n\nimagemURI',imagemURI)
        const nomeArquivo = imagemURI.split('/').pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;
        let resultDB;
        try {
            resultDB = await insertContato(nome, telefone, novoPath, lng, lat, data);
        }
        catch (err) {
            console.log(err);
            throw err;
        }
        console.log('addContato result', resultDB);
        dispatch(
            {
                type: ADD_CONTATO,
                dadosContato: {
                    id: resultDB.insertId,
                    nome,
                    telefone,
                    imagemURI: novoPath,
                    lng,
                    lat,
                    data
                }
            });


        try {
            await FileSystem.moveAsync({
                from: imagemURI,
                to: novoPath
            });

        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}
