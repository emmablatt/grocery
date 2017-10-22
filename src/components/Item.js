import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import style from '../style'

const Item = props => {
  console.log('Item text:', props.text)
  return (
    <View key={props.id} style={style.item}>
      <Text onPress={props.onPress}>{props.text}</Text>
      <Text style={{ color: 'grey' }}>{props.category}</Text>
    </View>
  )
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Item
