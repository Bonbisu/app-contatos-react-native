import * as SQLite from 'expo-sqlite'


const db = SQLite.openDatabase("contato.db");

export const init = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS 
                tb_contato (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nome TEXT NOT NULL,
                    imagemURI TEXT NOT NULL, 
                    telefone INTERGER NOT NULL,
                    lng TEXT NOT NULL,
                    lat TEXT NOT NULL,
                    data TEXT NOT NULL
                    );
                    `,
                [],
                () => { resolve() },
                (_, err) => { reject(err) }
            );
        });

    });

}

export const insertContato = (nome, telefone, imagemURI, lng, lat, data) => {
    console.log("insertContato", nome, telefone, imagemURI, lng, lat, data);
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO tb_contato (nome,imagemURI,telefone,lng,lat,data) VALUES (?,?,?,?,?,?);',
                [nome, imagemURI, telefone, lng, lat, data],
                (_, resultado) => { 
                    console.log('inseriu', resultado)
                    resolve(resultado) },
                (_, err) => {
                    console.log('erro ao inserir no banco', err)
                    reject(err) }
            );

        })
    });

}

export const buscarListaContato = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM tb_contato;',
                [],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            );
        })
    });

}

export const deletarListarContato = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'delete  from tb_contato;',
                [],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            );
        })
    });

}

export const dropTableContato = () => {
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'DROP TABLE tb_contato;',
                [],
                (_, resultado) => { resolve(resultado) },
                (_, err) => { reject(err) }
            );
        })
    });

}