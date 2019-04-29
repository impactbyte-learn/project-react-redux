import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Content from './components/Content'
import Counter from './components/Counter'

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        counter: state.counter - 1
      }
    default:
      return state
  }
}

const reduxStore = createStore(
  reducer,
  // Add Redux DevTools Extension
  // https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends React.Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <div>
          <Header />
          <Counter />
        </div>
      </Provider>
    )
  }
}

export default App
