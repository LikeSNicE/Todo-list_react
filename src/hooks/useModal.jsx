import { useState, useCallback } from "react";

const useModal = () => {
  const [activeModal, setActiveModal] = useState(null); 
  const [modalProps, setModalProps] = useState({}); 

  const openModal = useCallback((modalType, props = {}) => {
    setActiveModal(modalType);
    setModalProps(props);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
    setModalProps({});
  }, []);

  return {
    activeModal,
    modalProps,
    openModal,
    closeModal,
  };
};

export default useModal;
