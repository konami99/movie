import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Provider as PaperProvider } from 'react-native-paper';

import AppReducer from './src/reducers/AppReducer';
import { AppNavigator, middleware } from './src/components/AppNavigator';

class ReduxExampleApp extends React.Component {
  store = createStore(AppReducer, applyMiddleware(middleware));

  render() {
    return (
      <StoreProvider store={this.store}>
        <PaperProvider>
          <AppNavigator />
        </PaperProvider>
      </StoreProvider>
    );
  }
}

AppRegistry.registerComponent('ReduxExample', () => ReduxExampleApp);

export default ReduxExampleApp;