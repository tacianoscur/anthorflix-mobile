import React, { useEffect, useMemo, useState } from 'react';

import {
  View,
  Modal,
  Keyboard,
} from 'react-native';

import {
    TitleStyled,
    TextStyled,
    ContentWrapper,
    styles,
  } from './styles';

const CustomModal = ({
    modalRef,
    icon,
    title,
    text,
    children,
    noPaddingContent,
    adjustToContentHeight,
    onOpen,
    bottomPadding,
    visible,
    ...rest
}) => {
  const [modalVisible, setModalVisible] = useState(visible);

  const handleClose = () => setModalVisible(false);
  const handleOpen = () => setModalVisible(true);

  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  const onOpenFn = () => {
    Keyboard.dismiss();
    onOpen && onOpen();
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onHide={handleClose}
        onOpen={onOpenFn}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ContentWrapper>
              {!!title && <TitleStyled icon={icon}>{title}</TitleStyled>}
              {!!text && <TextStyled>{text}</TextStyled>}
            </ContentWrapper>
            <ContentWrapper
              noPaddingContent={noPaddingContent}
              bottomPadding={bottomPadding}>
              {children}
            </ContentWrapper>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;

/*
const modalTopOffset = useMemo(() => {
    const defaultOffset = 20;

    if (StatusBar?.currentHeight) {
      return StatusBar.currentHeight + defaultOffset;
    }

    return defaultOffset;
  }, []);

  const onOpenFn = () => {
    Keyboard.dismiss();
    onOpen && onOpen();
  };
    <Modal>
      <ContentWrapper
        noPaddingContent={noPaddingContent}
        bottomPadding={bottomPadding}>
        {children}
      </ContentWrapper>
    </Modal>
*/