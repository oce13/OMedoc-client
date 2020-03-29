import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Navigation from './app/navigation/navigation';
import { Provider } from 'react-redux';
import Store from './app/store/index';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>
            <Navigation />
          </SafeAreaView>
        </SafeAreaProvider>
      </Provider>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});