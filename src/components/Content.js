import React from 'react'
import { connect } from 'react-redux'

const Content = props => {
  return <h1>Build React Redux app, {props.counter} times</h1>
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Header)
