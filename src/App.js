import React, { Component } from 'react'

import './App.css';
//import Advice from './components/Advice';
//import HooksAdvice from './components/HooksAdvice';
import ReduxAdvice from './components/ReduxAdvice';
import {Provider} from 'react-redux'
import store from './redux/store'

export class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          {/* <Advice/> */}
          {/* <HooksAdvice/>  */}
          <ReduxAdvice/>
        </div>
      </Provider>
    )
  }
}

export default App
