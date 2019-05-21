import React from "react"
import { createDrawerNavigator } from "react-navigation"
import { Text, StyleSheet } from "react-native"

import Simples from "./components/Simples"
import Parimpar from "./components/Parimpar"
import { Inverter, MegaSena } from "./components/Multi"
import Contador from "./components/Contador"
import Plataformas from "./components/Plataformas"
import ValidarProps from "./components/ValidarProps"

export default createDrawerNavigator({
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