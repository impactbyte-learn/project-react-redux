import React from 'react'
import { connect } from 'react-redux'

class Counter extends React.Component {
  render() {
    return (
      <div>
        <p>Clicked: {this.props.count} times</p>
        <p>
          <button
            onClick={() => {
              this.props.dispatch({ type: 'INCREMENT' })
            }}
          >
            INCREMENT
          </button>
          <button
            onClick={() => {
              this.props.dispatch({ type: 'DECREMENT' })
            }}
          >
            DECREMENT
          </button>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Counter)
