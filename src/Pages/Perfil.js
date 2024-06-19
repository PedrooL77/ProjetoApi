import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Perfil() {
  return (
    <View style={css.container}>
      <Text style={css.text}>Perfil</Text>
    </View>
  )
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
