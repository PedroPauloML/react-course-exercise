import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"

import Simples from "./components/Simples"
import Parimpar from "./components/Parimpar"
import { Inverter, MegaSena } from "./components/Multi"

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.f20}>App!</Text>
        <Simples texto="Flexível!"/>
        <Parimpar numero={33}/>
        <Inverter texto="React Nativo!"/>
        {/* <MegaSena numeros={9}/> */}
        <MegaSena/>
      </View>
    )
  }
}

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