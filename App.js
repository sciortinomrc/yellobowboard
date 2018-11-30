/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import Route from './src/routes/index';
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import  allReducers from './src/reducers/allReducers'
import {Provider} from 'react-redux'
const store = createStore(allReducers,applyMiddleware(thunk,logger))
export default class App extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <Provider store={store}>
          <Route/>
      </Provider>
    );
    }
}
