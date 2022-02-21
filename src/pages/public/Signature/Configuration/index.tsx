import React, { useCallback, useEffect } from 'react';

import { StatusBar } from 'react-native';
import { observer } from 'mobx-react';
import useAppStore from '~/hooks/useAppStore';
import { MainContainer, MainTitle, UpdateIndicator, UpgradeContainer, UpgradeText } from './styles';
import Loading from '~/components/Loading';
import { withOpacity } from '~/styles/colors';
import { SignatureStackParamList } from '~/navigation/types';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<SignatureStackParamList, 'SignatureConfiguration'>;

const Configuration = ({ navigation }: Props) => {
  const { signatureStore } = useAppStore();

  useEffect(() => {
    signatureStore.checkSignature();
  }, [signatureStore]);

  const navigateToSignature = useCallback(() => {
    navigation.navigate('SignatureRegistration');
  }, [navigation]);

  return (
    <MainContainer>
      <StatusBar barStyle="dark-content" backgroundColor={withOpacity('#62707E', 0.2)} />
      <MainTitle>Configurações</MainTitle>
      {!signatureStore.loading ? (
        !signatureStore.hasSignature && (
          <>
            <UpgradeContainer onPress={navigateToSignature}>
              <UpdateIndicator />
              <UpgradeText> Faça Upgrade agora</UpgradeText>
            </UpgradeContainer>
          </>
        )
      ) : (
        <Loading />
      )}
    </MainContainer>
  );
};

export const SignatureConfiguration = observer(Configuration);
