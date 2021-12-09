import React, { useEffect } from 'react';
import {
    Alert,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    Image,
    Button,
    Pressable
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { connect, useSelector, useDispatch } from 'react-redux';
import Styles, { colors } from '../assets/styles';
import { setLoadingModalVisible } from '../actions/index';
// Images
import logo from '../assets/images/logo.png';
import iconBetGroup from '../assets/images/icon-group-bet.png';
import iconBetSingle from '../assets/images/icon-single-bet.png';

// Services
import * as Functions from '../services/functions.service';
import LoadingModal from '../assets/components/LoadingModal';

const ChoiceBetType = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state?.userReducer);
    const { currentGame } = useSelector((state) => state?.betReducer);

    useEffect(() => {
        navigation.setOptions({
            title: currentGame
        });
    }, [])

    return (
        <View style={{ ...Styles.container }}>
            <Text style={Styles.titlePrimary}>Escolha sua aposta</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SoloBetStepOne')} style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                <Text style={Styles.titlePrimary}>MODO SOLO</Text>
                <Text style={Styles.buttonSecondaryText}>1 vs 1</Text>
                <Image source={iconBetSingle} style={Styles.betIcon} />
            </TouchableOpacity>
            <View style={{ width: '80%', height: 2, backgroundColor: colors.primary }} />

            <TouchableOpacity onPress={() => navigation.navigate('SoloBetStepOne')} style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                <Text style={Styles.titlePrimary}>MODO EQUIPE</Text>
                <Text style={Styles.buttonSecondaryText}>TEAM vs TEAM</Text>
                <Image source={iconBetGroup} style={Styles.betIcon} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceBetType);