import React, { useEffect } from 'react';
import {
    Alert,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    Image,
    Button
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { connect, useSelector } from 'react-redux';
import Styles from '../assets/styles';
// Images
import cardIcon from '../assets/images/icon-card.png';

// Services
import * as Functions from '../services/functions.service';

// Components
import DoubleMenu from '../assets/components/DoubleMenu';
import GradientButton from '../assets/components/GradientButton';

const Deposit = (props) => {

    const navigation = useNavigation();
    const { user } = useSelector((state) => state?.userReducer);

    useEffect(() => {
        console.log({ user });
    }, [])

    return (
        <View style={{ ...Styles.container }}>
            <DoubleMenu firstOption="Forma de Pagamento" secondOption="Dados e informações" />
            <View style={{ flex: 1, marginVertical: 20 }}>
                <GradientButton icon={cardIcon} title="Cartão de crédito" onPress={() => { navigation.navigate('DepositScreen') }} />
            </View>
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);