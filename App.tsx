import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MainNavigation } from './src/navigation';

declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
