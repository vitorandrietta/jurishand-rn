import React from 'react';

import {
  JobsLogo,
  MainContainer,
  MainTitle,
  ModalShadeStyle,
  SignatureButton,
  SignatureButtonLabelStyle,
  SignatureTitle,
} from './styles';

import ModalContainer from '~/components/Modal';

import DropShadow from 'react-native-drop-shadow';

interface IModalInternetPatrocinada {
  isVisible: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const SignatureModal: React.FC<IModalInternetPatrocinada> = ({ isVisible, onConfirm, onClose }) => {
  return (
    <ModalContainer isVisible={isVisible} onClose={onClose}>
      <DropShadow style={ModalShadeStyle}>
        <MainContainer>
          <MainTitle>Faça Upgrade no JurisHand e seja feliz</MainTitle>
          <JobsLogo height={280} />
          <SignatureTitle>Assine por R$299,90 por ano (R$24,90 por mes)</SignatureTitle>
          <SignatureButton onPress={onConfirm} labelStyle={SignatureButtonLabelStyle}>
            Assine Agora
          </SignatureButton>
        </MainContainer>
      </DropShadow>
    </ModalContainer>
  );
};

export default SignatureModal;
