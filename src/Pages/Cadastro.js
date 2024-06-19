import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function Insirir() {

  const { setCadastro } = useContext( AuthContext );

    const[ usuarioNome, setNome] = useState("")
    const[ usuarioEmail, setEmail] = useState("")
    const[ usuarioSenha, setSenha] = useState("")
    const[ usuarioTelefone, setTelefone] = useState("")
    const[sucesso, setSucesso] = useState(false)
    const[erro, setErro] = useState(false)

    async function Cadastro(){
        {
            await fetch('http://10.139.75.99:5251/api/Usuarios/CreateUsuario', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify ({
                usuarioNome: usuarioNome,
                usuarioEmail: usuarioEmail,
                usuarioSenha: usuarioSenha,
                usuarioTelefone: usuarioTelefone
                
              })
            })
              .then( res => (res.ok == true) ? res.json() : false)
              .then(json => console.log(json))
              .catch(err => setErro(true))
              
          }
    }

  return (
    <ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: 'white'}}>
        <Image source={require("../../assets/InApplogopng.png")} style={css.logo} />
        <View style={css.caixatexto}>
          <Text style={css.textcadastro}>Cadastre-Se</Text>
        </View> 
       
        <> 
        <TextInput style={css.input}
            placeholder=" Nome" placeholderTextColor={'lightgray'} onChangeText={(digitado) => setNome(digitado)} TextInput={usuarioNome}
        />
        <TextInput style={css.input}
            placeholder=" Email" placeholderTextColor={'lightgray'} onChangeText={(digitado) => setEmail(digitado)} TextInput={usuarioEmail}
        />
        <TextInput style={css.input}
            placeholder=" Telefone" placeholderTextColor={'lightgray'} onChangeText={(digitado) => setTelefone(digitado)} TextInput={usuarioTelefone}
        />
        <TextInput style={css.input}
            placeholder=" Senha" placeholderTextColor={'lightgray'} onChangeText={(digitado) => setSenha(digitado)} TextInput={usuarioSenha}
        />
        </> 
        {sucesso && (
                <View>
                    <Text style={css.sucessoTxt}>Observação salva com sucesso!</Text>
                </View>
            )}
        { erro && <Text>ERRADO</Text>}

      <TouchableOpacity style={css.btnLogin} onPress={Cadastro}><Text style={css.btnLoginText}>INSERIR</Text></TouchableOpacity>
      <TouchableOpacity style={css.btnCadastro} onPress={() => setCadastro( false ) }><Text style={css.btnCadastroText} >Voltar para o Login</Text></TouchableOpacity>
    </ScrollView>
  )
}

const css = StyleSheet.create({
    input: {
      width: "90%",
      height: 50,
      borderRadius: 10,
      marginBottom: 15,
      padding: 15,
      backgroundColor: "#262626",
      color: "white"
    },
    btnLogin: {
      width: "90%",
      height: 50,
      borderWidth: 1,
      borderRadius: 10,
      marginTop: 30,
      backgroundColor: "#717165"
    },
    btnLoginText: {
      color: "white",
      lineHeight: 45,
      textAlign: "center",
      fontSize: 15,
      fontWeight: "bold"
    },
    btnCadastro: {
      width: "90%",
      marginTop: 10,
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    btnCadastroText: {
      color: "#717165",
      fontWeight: "bold"
    },
    caixatexto:{
      marginBottom: "10%"
    },
    textcadastro:{
       fontWeight: "bold",
       fontSize: 25,
       color: "#717165"
    },
    logo:{
      width: "100%",
      height: "20%"
    }
})