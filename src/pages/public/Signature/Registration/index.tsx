import React, { useCallback } from 'react';

import { observer } from 'mobx-react';

import { BottomDescription, MainContainer } from './styles';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SignatureStackParamList } from '~/navigation/types';
import useAppStore from '~/hooks/useAppStore';
import useModal from '~/components/Modal/hooks/useModal';
import SignatureModal from '~/components/SignatureModal';

import { StatusBar } from 'react-native';

type Props = NativeStackScreenProps<SignatureStackParamList, 'SignatureRegistration'>;

const Registration = ({ navigation }: Props): JSX.Element => {
  const { signatureStore } = useAppStore();

  const { closeModal, isModalVisible } = useModal(true);

  const confirmSignature = useCallback(() => {
    closeModal();
    signatureStore.addSignature();
    navigation.goBack();
  }, [closeModal, navigation, signatureStore]);

  const returnToPreviousPage = useCallback(() => {
    closeModal();
    navigation.goBack();
  }, [closeModal, navigation]);

  return (
    <MainContainer>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <SignatureModal
        isVisible={isModalVisible}
        onClose={returnToPreviousPage}
        onConfirm={confirmSignature}
      />
      <BottomDescription>Você Será cobrado imediatamente sem período trial</BottomDescription>
    </MainContainer>
  );
};

export const SignatureRegistration = observer(Registration);
