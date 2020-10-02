export const ADD_CONTATO = 'ADD-CONTATO';

export const addContato = (nome, telefone, imagemURI) => {
    return {
        type: ADD_CONTATO, dadosContato: {nome: nome, telefone: telefone, imagemURI: imagemURI}
    }
}