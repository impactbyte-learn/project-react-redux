import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Content from './components/Content'
import Counter from './components/Counter'

const initialState = {
  count: 0
}

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
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

const App = () => {
  return (
    <Provider store={reduxStore}>
      <div>
        <Content />
        <Counter />
      </div>
    </Provider>
  )
}

export default App
