import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import { App, Values } from 'redux-form-website-template'

const dest = document.getElementById('content')
const reducer = combineReducers({
  form: reduxFormReducer // mounted under "form"
})
const store =
  (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(reducer)

let render = () => {
  const SubmitValidationForm = require('./SubmitValidationForm').default

  ReactDOM.render(
    <Provider store={store}>
      <App>

        <h2>Form</h2>

        <SubmitValidationForm/>

        <Values form="submitValidation"/>

      </App>
    </Provider>,
    dest
  )
}

// if (module.hot) {
//   // Support hot reloading of components
//   // and display an overlay for runtime errors
//   const renderApp = render
//   const renderError = (error) => {
//     const RedBox = require('redbox-react')
//     ReactDOM.render(
//       <RedBox error={error} className="redbox"/>,
//       dest
//     )
//   }
//   render = () => {
//     try {
//       renderApp()
//     } catch (error) {
//       renderError(error)
//     }
//   }
//   const rerender = () => {
//     setTimeout(render)
//   }
//   module.hot.accept('./SubmitValidationForm', rerender)
//   module.hot.accept('./SubmitValidation.md', rerender)
//   module.hot.accept('./submit', rerender)
//   module.hot.accept('!!raw!./SubmitValidationForm', rerender)
//   module.hot.accept('!!raw!./submit', rerender)
// }

render()
