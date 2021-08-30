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
import SectionTitle from '../assets/components/SectionTitle';

const Wallet = (props) => {

    const navigation = useNavigation();
    const { user } = useSelector((state) => state?.userReducer);

    useEffect(() => {
        console.log({ user });
    }, [])

    return (
        <View style={{ ...Styles.container, justifyContent: 'space-between' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                {/* <SectionTitle title="Seu saldo" /> */}
                <View style={{ flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center' }}>
                    <Text style={{ ...Styles.tipText, fontSize: 14, width: "10%", alignSelf: 'flex-end' }}>Saldo</Text>
                    <Text style={{ ...Styles.moneyInfoDesc }}>R$</Text>
                    <Text style={Styles.moneyInfoText}>{Functions.centsToBrl(user?.balance || 0).replace("R$", "")}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('DepositMenu')} style={Styles.buttonPrimary}>
                <Text style={Styles.buttonPrimaryText}>DEPOSITAR</Text>
            </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);