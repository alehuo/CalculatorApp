import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import CalculatorButton from '../Components/CalculatorButton'
import ResultDisplay from '../Components/ResultDisplay'
import { Col, Row, Grid } from "react-native-easy-grid";

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stack: [],
      value: "0"
    }
  }
  
  addToStack = (val) => {
    this.state.stack.push(val);
    let res = this.state.stack.join("");
  }

  // update = () => this.setState({value: this.state.stack.join("")});

  render () {
    return (
      <View style={[styles.mainContainer, styles.container]}>
        <Grid>
        <Row>
          <Col><ResultDisplay val={this.state.value}/></Col>
        </Row>
        <Row>
          <Col><CalculatorButton val="CE"/></Col>
          <Col><CalculatorButton val="C"/></Col>
          <Col><CalculatorButton val="DEL"/></Col>
          <Col><CalculatorButton val="/" onClick={this.addToStack("/")}/></Col>
        </Row>
        <Row>
          <Col><CalculatorButton val="7" onClick={this.addToStack("7")}/></Col>
          <Col><CalculatorButton val="8" onClick={this.addToStack("8")}/></Col>
          <Col><CalculatorButton val="9" onClick={this.addToStack("9")}/></Col>
          <Col><CalculatorButton val="*" onClick={this.addToStack("*")}/></Col>
        </Row>
        <Row>
          <Col><CalculatorButton val="4" onClick={this.addToStack("4")}/></Col>
          <Col><CalculatorButton val="5" onClick={this.addToStack("5")}/></Col>
          <Col><CalculatorButton val="6" onClick={this.addToStack("6")}/></Col>
          <Col><CalculatorButton val="-" onClick={this.addToStack("-")}/></Col>
        </Row>
        <Row>
          <Col><CalculatorButton val="1" onClick={this.addToStack("1")}/></Col>
          <Col><CalculatorButton val="2" onClick={this.addToStack("2")}/></Col>
          <Col><CalculatorButton val="3" onClick={this.addToStack("3")}/></Col>
          <Col><CalculatorButton val="+" onClick={this.addToStack("+")}/></Col>
        </Row>
        <Row>
          <Col><CalculatorButton val="+-"/></Col>
          <Col><CalculatorButton val="0" onClick={this.addToStack("0")}/></Col>
          <Col><CalculatorButton val="," onClick={this.addToStack(",")}/></Col>
          <Col><CalculatorButton val="="/></Col>
        </Row>
        </Grid>
      </View>
    )
  }
}
