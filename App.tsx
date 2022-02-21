/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import theme from '~/styles/theme';
import useAppStore from '~/hooks/useAppStore';

import SignatureStack from '~/navigation/stacks/SignatureStack';
import { NavigationContainer } from '@react-navigation/native';
import Loading from '~/components/Loading';

const App = () => {
  const { configStore } = useAppStore();

  useEffect(() => {
    configStore.initAppDB();
  }, [configStore]);

  return (
    <PaperProvider theme={theme}>
      {configStore.loading ? (
        <Loading />
      ) : (
        <NavigationContainer>
          <SignatureStack />
        </NavigationContainer>
      )}
    </PaperProvider>
  );
};

export default App;
