import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons'
import {Ionicons} from '@expo/vector-icons'
import Cores from '../constantes/Cores'
import { Platform } from 'react-native';

const BotaoCabecalho = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS==='android' ? 'black' : Cores.primary}

        />
    )
}

export default BotaoCabecalho;