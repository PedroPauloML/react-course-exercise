import React from "react"
import { createDrawerNavigator } from "react-navigation"
import { Text, StyleSheet } from "react-native"

import Simples from "./components/Simples"
import Parimpar from "./components/Parimpar"
import { Inverter, MegaSena } from "./components/Multi"
import Contador from "./components/Contador"
import Plataformas from "./components/Plataformas"
import ValidarProps from "./components/ValidarProps"
import Evento from "./components/Evento"
import Avo from "./components/ComunicacaoDireta"
import TextoSincronizado from "./components/ComunicacaoIndireta"
import ListaFlex from "./components/ListaFlex"
import Flex from "./components/Flex"

export default createDrawerNavigator({
  Flex: {
    screen: Flex
  },
  ListaFlex: {
    screen: ListaFlex,
    navigationOptions: { title: "Lista Flex" }
  },
  ComunicacaoIndireta: {
    screen: TextoSincronizado,
    navigationOptions: { title: "Comunicacao Indireta" }
  },
  ComunicacaoDireta: {
    screen: () => <Avo nome="João" sobrenome="Silva"/>,
    navigationOptions: { title: "Comunicação Direta" }
  },
  Evento: {
    screen: () => <Evento ano={18}/>
  },
  ValidarProps: {
    screen: () => <ValidarProps ano={18}/>
  },
  Plataformas: {
    screen: () => <Plataformas/>
  },
  Contador: {
    screen: () => <Contador numero={8}/>
  },
  MegaSena: {
    screen: () => <MegaSena numeros={8}/>,
    navigationOptions: { title: "Mega Sena" }
  },
  Inverter: {
    screen: () => <Inverter texto="React Nativo!"/>
  },
  Parimpar: {
    screen: () => <Parimpar numero={33}/>,
    navigationOptions: { title: "Par/Ímpar" }
  },
  Simples: {
    screen: () => <Simples texto="Flexível!"/>
  },
  Texto: {
    screen: () => <Text style={styles.f20}>App!</Text>
  }
}, { drawerWidth: 300 })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  f20: {
    fontSize: 20
  }
})