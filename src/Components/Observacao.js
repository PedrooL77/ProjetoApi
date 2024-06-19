import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function NovaObservacao({id}) {
    const [observacaoDescricao, setDescricao] = useState("");
    const [observacaoLocal, setLocal] = useState("");
    const [observacaoData, setData] = useState("");
    const [sucesso, setSucesso] = useState(false);
    const { usuarioId } = useContext(AuthContext);


    async function SalvarObservacao() {

        if (!observacaoDescricao || !observacaoLocal || !observacaoData) {
            Alert.alert('Erro', 'Confira todos os campos e tente novamente.');
            return;
        }

        await fetch('http://10.139.75.99:5251/api/Observacoes/CreateObservacao', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                observacaoDescricao: observacaoDescricao,
                observacaoLocal: observacaoLocal,
                observacaoData: "2024-06-19T13:57:56.407Z",
                usuarioId: usuarioId,
                objetoId: id
            })
        })

            .then(res => res.json())
            .then(json => {
                setSucesso(true);
                setDescricao("");
                setLocal("");
                setData("");
            })
            .catch(err => console.log(err));
    }

    return (
        <View style={styles.container}>

            <TextInput
                placeholder="Descrição da observação"
                style={styles.input}
                value={observacaoDescricao}
                onChangeText={(digitado) => setDescricao(digitado)}
                placeholderTextColor="lightgray"
            />
            <TextInput
                placeholder="Local da observação"
                style={styles.input}
                value={observacaoLocal}
                onChangeText={(digitado) => setLocal(digitado)}
                placeholderTextColor="lightgray"
            />
            <TextInput
                placeholder="Data da observação"
                style={styles.input}
                value={observacaoData}
                onChangeText={(digitado) => setData(digitado)}
                placeholderTextColor="lightgray"
            />

            <TouchableOpacity onPress={SalvarObservacao} style={styles.button}>
                <Text style={styles.btnText}>Salvar</Text>
            </TouchableOpacity>

            {sucesso && (
                <View>
                    <Text style={styles.sucessoTxt}>Observação salva com sucesso!</Text>
                </View>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 2.5,
        borderColor: "#717165",
        borderRadius: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        fontWeight: '400',
        width: "90%",
        height: 50,
        padding: 15,
        backgroundColor: "#262626",
        color: "white"
    },
    button: {
        width: '90%',
        height: 50,
        backgroundColor: "#717165",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    sucessoTxt: {
        marginTop: 15,
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold',
    },
});

