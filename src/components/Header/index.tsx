import React, { useCallback } from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { AppbarTitle, BackButton } from './styles';
import { View } from 'react-native';

export interface HeaderProps {
  showMenu?: boolean;
  title?: string;
  headerChildren?: React.ReactNode;
  backIcon?: string;
  centralizeTitles?: boolean;
  displayBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  headerChildren,
  backIcon = 'arrow-left',
  centralizeTitles = false,
  displayBackButton = true,
}) => {
  const navigation = useNavigation();

  const returnToPreviousScreen = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View>
      <Appbar.Header
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ backgroundColor: 'transparent' }}
        statusBarHeight={StatusBar.currentHeight}
      >
        {displayBackButton && <BackButton icon={backIcon} onPress={returnToPreviousScreen} />}
        {title && <AppbarTitle title={title} centralized={centralizeTitles} />}
        {headerChildren}
      </Appbar.Header>
    </View>
  );
};

export default Header;
