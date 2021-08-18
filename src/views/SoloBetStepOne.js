import React, { useEffect, useState } from 'react';
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

const SoloBetStepOne = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state?.userReducer);
    const [betInfo, setBetInfo] = useState({ title: "", amount: "" });

    useEffect(() => {
        console.log({ user });
    }, [])

    const handleMoveToNextStep = (info) => {

        if (info?.title === "" || info?.amount === "") {
            Alert.alert("Erro", "Preencha todos os campos");
            return false;
        }

        navigation.navigate('SoloBetStepTwo');
    }

    return (
        <View style={{ ...Styles.container }}>
            <Text style={Styles.titlePrimary}>PASSO 1</Text>
            <Text style={Styles.buttonSecondaryText}>Digite os dados da sua aposta</Text>
            <Text style={Styles.tipText}>Descreva sua aposta pelo nome</Text>
            <TextInput style={Styles.textInput} autoCapitalize="none" defaultValue={betInfo?.title} onChangeText={(e) => setBetInfo({ ...betInfo, title: e })} placeholder="Nome da aposta" placeholderTextColor={colors.primary} />
            <Text style={Styles.tipText}>Valor</Text>
            <TextInput style={Styles.textInput} autoCapitalize="none" defaultValue={betInfo?.amount} onChangeText={(e) => setBetInfo({ ...betInfo, amount: e })} placeholder="R$" placeholderTextColor={colors.primary} />
            <TouchableOpacity style={Styles.buttonPrimary} onPress={() => handleMoveToNextStep(betInfo)}>
                <Text style={Styles.buttonPrimaryText}>AVANÇAR</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SoloBetStepOne);