import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableNativeFeedback } from 'react-native'
import styles from './Styles/CalculatorButtonStyle'

export default class CalculatorButton extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <TouchableNativeFeedback useForeground={true}>
        <View style={styles.container}>
            <Text style={styles.value}>{this.props.val}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}
