import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '~/components/Header';

import { SignatureStackParamList } from '~/navigation/types';
import { SignatureRegistration } from '~/pages/public/Signature/Registration';
import { SignatureConfiguration } from '~/pages/public/Signature/Configuration';

const Stack = createStackNavigator<SignatureStackParamList>();

const SignatureStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        header: () => <Header displayBackButton={false} />,
      })}
    >
      <Stack.Screen name="SignatureConfiguration" component={SignatureConfiguration} />
      <Stack.Screen
        name="SignatureRegistration"
        component={SignatureRegistration}
        options={() => ({
          header: () => <Header />,
        })}
      />
    </Stack.Navigator>
  );
};

export default SignatureStack;
