import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Observacao from './Observacao';

export default function Objeto({ nome, cor, foto, observacao, objetoId }) {

    const [detalhes, setDetalhes] = useState(false);
    const [observacoes, setObservacoes] = useState(false);

    const altura = () => {
        if (observacoes) return 780;
        if (detalhes) return 580;
        return 460;
    };

    const mostrarDetalhes = () => {
        setDetalhes(!detalhes);
        if (observacoes) setObservacoes(false);
    };

    const mostrarObservacao = () => {
        setObservacoes(!observacoes);
        if (detalhes) setDetalhes(false);
    };

    return (
        <ScrollView contentContainerStyle={[css.box, { height: altura() }]}>
            <View style={css.header}>
                <Text style={css.title}>{nome} </Text>
            </View>
            <View style={css.boxImage}>
                <Image style={css.image} source={{ uri: foto }}></Image>
            </View>
            <View style={css.buttonsContainer}>
                <TouchableOpacity style={[css.infos, detalhes && css.infoAparecendo]} onPress={mostrarDetalhes}>
                    <Text style={css.infosTxt}>Detalhes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[css.infosum, observacoes && css.infoAparecendo]} onPress={mostrarObservacao}>
                    <Text style={css.infosTxt}>Observação</Text>
                </TouchableOpacity>
            </View>
            {detalhes && (
                <View style={css.categoryBox}>

                    <Text style={css.categoryText}>Cor: {cor}</Text>

                    <Text style={css.categoryText}>Detalhe: {observacao}</Text>
                </View>
            )}

            {observacoes && (
                <Observacao id={objetoId}/>
            )}
            
        </ScrollView>
    )
}

const css = StyleSheet.create({
    box: {
        borderColor: '#4E5C4F',
        backgroundColor: "lightgray",
        borderRadius: 10,
        borderWidth: 3,
        marginTop: 30,
        width: 370,
        margin: '0 auto',
    },
    header: {
        padding: 13,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        backgroundColor: "#717165",
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    boxImage: {
        width: "80%",
        marginLeft: "10%",
        height: 300,
        marginBottom: 5,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderBottomRightRadius: 7,
        borderBottomLeftRadius: 7,
        marginTop: 10
    },
    descriptionBox: {
        marginBottom: 10,
    },
    descriptionText: {
        fontWeight: '500',
        marginLeft: 20,
        fontSize: 19,
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginLeft: "10%",
        marginBottom: 10,
    },
    infos: {
        width: '40%',
        height: 50,
        marginTop: 20,
        backgroundColor: "#717165",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    infosum: {
        width: '40%',
        height: 50,
        marginTop: 20,
        backgroundColor: "#717165",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 30
    },
    infosTxt: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    infoAparecendo: {
        backgroundColor: "#4E5C4F",
    },

    categoryBox: {
        alignItems: 'center',
        marginLeft: "25%",
        borderColor: "#4E5C4F",
        textAlign: 'center',
        width: "50%",
        backgroundColor: "#717165",
        paddingVertical: 20,
        marginTop: 15
    },
    categoryText: {
        fontSize: 16,
        color: "white",
        borderRadius: 10,
    },
});