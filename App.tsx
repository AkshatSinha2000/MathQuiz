import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import StackNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';

function App(){
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <StackNavigation/>
      </PersistGate>
      </Provider>
  );
}


export default App;
