import { useState, useCallback } from 'react';

const useModal = (
  initialVisibility = false
): { isModalVisible: boolean; openModal: () => void; closeModal: () => void } => {
  const [isModalVisible, setIsModalVisible] = useState(initialVisibility);
  const openModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);
  return { isModalVisible, openModal, closeModal };
};

export default useModal;
