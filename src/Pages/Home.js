import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

import Objeto from '../Components/Objeto';
import { useFocusEffect } from '@react-navigation/native';



export default function Home() {

  const [objetos, setObjetos] = useState([]);

  async function getObjetos() {
    await fetch('http://10.139.75.99:5251/api/Objetos/GetAllObjetos', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setObjetos(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getObjetos();
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      getObjetos();
    }, [])
  );

  return (
    <View style={css.container}>
      {objetos ?
        <>
          
          <Image source={require("../../assets/InApplogopng.png")} style={css.logo} />
          <FlatList
            style={css.lista}
            data={objetos}
            renderItem={({ item }) => <Objeto objetoNome={item.objetoNome} objetoCor={item.objetoCor} objetoObservacao={item.objetoObservacao} objetoLocalDesaparecimento={item.objetoLocalDesaparecimento} objetoFoto={item.objetoFoto} objetoDtDesaparecimento={item.objetoDtDesaparecimento} objetoDtEncontro={item.objetoDtEncontro} objetoStatus={item.objetoStatus} />}
            keyExtractor={(item) => item.objetoId }
            contentContainerStyle={{ height: (objetos.length * 1000) + 110 }}
          />
        </>
        :
        <Text style={css.text}>Carregando objetos...</Text>
      }
    </View>
  )
}
const css = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexGrow: 1,
    color: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "black"
  },
  logo:{
    width: "90%",
    height: "10%",
    marginTop: 50
  },
  lista:{
    backgroundColor: "lightgray",
    width: "100%",
  }
})