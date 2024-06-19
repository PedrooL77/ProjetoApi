
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Objeto from '../Components/Objeto'

export default function Home() {
  const [objeto, setObjeto] = useState([]);
  const [loading, setLoading] = useState(true);


  async function getObjeto() {
    await fetch('http://10.139.75.99:5251/api/Objetos/GetAllObjetos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setObjeto(json))
      .catch(err => console.log(err));
    setLoading(false);
  }


  useEffect(() => {
    getObjeto();
  }, []);

  return (
    <View style={css.container}>
      
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        objeto.length > 0 ? (
          <>
            
            <FlatList
              data={objeto}
              renderItem={({ item }) => (
                <Objeto
                  nome={item.objetoNome}
                  cor={item.objetoCor}
                  objetoId={item.objetoId}
                  objetoLocalDesaparecimeto={item.objetoLocalDesaparecimeto}
                  observacao={item.objetoObservacao}
                  foto={item.objetoFoto}
                  dtdesaparecimento={item.objetoDtDesaparecimeto}
                  dtencontro={item.objetoDtEncontro}
                />
              )}
              keyExtractor={(item) => item.objetoId}
              contentContainerStyle={css.listContainer}
            />
          </>
        ) : (
          <Text style={css.text}>Nenhum objeto encontrado.</Text>
        )
      )}
    </View>
  )
}

const css = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 18,
  },
  listContainer: {
    paddingBottom: 20,
  },
  stories: {
    width: "100%",
    height: 100,
  },
  boximage:{
    height: "20%"
  },
  logo:{
    marginTop: 30,
    height: "100%"
  }
})