import { View, Text, TextInput, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Busca() {
    const [objetos, setObjetos ] = useState( [] );
    const [error, setError ] = useState(false);
    const [busca, setBusca] = useState(false);
    const [filtro, setFiltro ] = useState(false);

    async function getObjetos()
    {
        await fetch('http://10.139.75.99:5251/api/Objetos/GetAllObjetos', {
            method: 'GET',
            headers: {
              'content-type': 'application/json'
            }
          })
            .then( res => ( res.ok == true ) ? res.json() : false )
            .then( json => setObjetos( json ) )
            .catch( err => setError( true ) )
    }

    useEffect( () => {
        getObjetos();
    }, [] );

    useEffect( () => {
        setFiltro( objetos.filter( (item) => item.objetoNome == busca )[0] );
    }, [busca] );

    return (
        <View style={css.container}>
            <View style={css.searchBox}>
                <TextInput
                    style={css.search}
                    placeholder="Buscar objetos"
                    placeholderTextColor="#717165"
                    TextInput={busca}
                    onChangeText={(digitado) => setBusca( digitado ) }
                />
            </View>
            { filtro && <Text style={css.text}>{filtro.objetoNome} {filtro.objetoNome}</Text> }
            { ( !filtro && busca ) && <ActivityIndicator size="large" color="black" /> }
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        alignItems: "center",
        backgroundColor: "white",
    },
    text: {
        color: "black"
    },
    searchBox: {
        width: "100%",
        height: 100,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    search: {
        width: "96%",
        height: 60,
        borderWidth: 1,
        borderColor: "#717165",
        borderRadius: 8,
        padding: 10,
        backgroundColor: "lightgray",
        color: "black"
    }
})