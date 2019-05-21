import React, { Component } from "react"
import { View, Text, TouchableHighlight } from "react-native"
import Padrao from "../estilo/Padrao"

export default class Contador extends Component {
  state = {
    numero: this.props.numero || 0
  }

  // constructor(props) {
  //   super(props)

  //   this.maisUm = this.maisUm.bind(this)
  //   this.limpar = this.limpar.bind(this)
  // }

  maisUm() {
    this.setState({ numero: this.state.numero + 1 })
  }
  
  limpar() { this.setState({ numero: this.props.numero || 0 }) }

  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}>{this.state.numero}</Text>
        <TouchableHighlight
          onPress={() => this.maisUm()}
          onLongPress={() => this.limpar()}>
          <Text style={Padrao.btn}>Incrementar/Zerar</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
