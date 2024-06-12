import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react';

export default function Objeto({ objetoId, objetoNome, objetoFoto, objetoCor, objetoObservacao, objetoLocalDesaparecimento, objetoDtDesaparecimento, objetoDtEncontro }) {
    
    const [detalhes, setDetalhes] = useState(null);
    const [observacao, setObservacao] = useState(null);
    const [descricao, setObservacaoDescricao] = useState();
    const [local, setObservacaoLocal] = useState();
    const [data, setObservacaoData] = useState();
    const [fecha, setFechar] = useState();

    return (
        <View style={css.container}>
            <View style={css.boxTitle}>
                <View style={css.circleAvatar}></View>
                <Text style={css.title}>{objetoNome}</Text>
            </View>
            <View style={css.boxImage}>
                <Image source={{ uri: objetoFoto }} style={css.imagem} />
                <View style={css.btns}>
                    <TouchableOpacity style={css.btnLogin} title="Detalhes" onPress={setDetalhes}>
                        <Text style={css.btnLoginText}>DETALHES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.btnLogin} title="Observação" onPress={setObservacao}>
                        <Text style={css.btnLoginText}>OBSERVACÃO</Text>
                    </TouchableOpacity>
                </View>
               
                <View style={css.detailsBox}>
                    <Text style={css.detailsText}>Cor: {objetoCor}</Text>
                    <Text style={css.detailsText}>Observação: {objetoObservacao}</Text>
                    <Text style={css.detailsText}>Local de Desaparecimento: {objetoLocalDesaparecimento}</Text>
                    <Text style={css.detailsText}>Data de Desaparecimento: {objetoDtDesaparecimento}</Text>
                    <Text style={css.detailsText}>Data de Encontro: {objetoDtEncontro}</Text>
                </View>
                
                <View style={css.observacao}>
                    <TextInput
                        style={css.search}
                        placeholder="Descrição"
                        placeholderTextColor="lightgray"
                        TextInput={descricao}
                        onChangeText={(digitado) => setObservacaoDescricao(digitado)} />

                    <TextInput
                        style={css.search}
                        placeholder="Local"
                        placeholderTextColor="lightgray"
                        TextInput={local}
                        onChangeText={(digitado) => setObservacaoLocal(digitado)} />

                    <TextInput
                        style={css.search}
                        placeholder="Data"
                        placeholderTextColor="lightgray"
                        TextInput={data}
                        onChangeText={(digitado) => setObservacaoData(digitado)} />
                </View>
                
            </View>
            
        </View>
    );
}
const css = StyleSheet.create({
    container: {
        width: "100%",
        height: 600
    },
    btns:{
        flexDirection: "row"
    },
    observacao:{
        width: "100%",
        padding: 10,
        marginTop: 10,
        backgroundColor: "#717165"
    },
    boxTitle: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: 15,
        marginTop: 15,
        paddingLeft: 5
    },
    circleAvatar: {
        width: 35,
        height: 35,
        borderRadius: 50,
        backgroundColor: "black",
        marginRight: 10,
    },
    title: {
        color: "black",
        textAlign: "center"
    },
    boxImage: {
        width: "80%",
        height: "80%",
        marginLeft: "10%"
    },
    imagem: {
        width: "100%",
        height: "70%",
        resizeMode: "cover"
    },
    detailsBox: {
        width: "100%",
        padding: 10,
        marginTop: 10,
        backgroundColor: "#717165"
    },
    detailsText: {
        color: "white",
        textAlign: "justify",
        marginBottom: 5
    },
    btnLogin: {
        width: "50%",
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: "#717165"
    },
    btnLoginText: {
        color: "white",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"
    }
})

