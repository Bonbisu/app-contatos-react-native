import React from 'react';
import { View, Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import Cores from '../constants/Cores'

const HeaderBarButton = (props) => {
  return (
      <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? Cores.black : Cores.primary}

      />
  )
}

export default HeaderBarButton;