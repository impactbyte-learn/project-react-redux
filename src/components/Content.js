import React from 'react'
import { connect } from 'react-redux'

const Content = props => {
  return <h1>Build React Redux app, {props.count} times</h1>
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Content)
