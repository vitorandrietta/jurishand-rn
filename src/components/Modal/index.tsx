import { Modal, Portal } from 'react-native-paper';
import React, { ReactChild } from 'react';

interface IModalInterface {
  isVisible: boolean;
  onClose: () => void;
  children: ReactChild;
}

const ModalContainer: React.FC<IModalInterface> = ({ isVisible, onClose, children }) => {
  return (
    <Portal>
      <Modal visible={isVisible} onDismiss={onClose}>
        {children}
      </Modal>
    </Portal>
  );
};

export default ModalContainer;
