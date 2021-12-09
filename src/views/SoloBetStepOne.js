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
import { setNewBet } from '../actions/index';
import { TextInputMask } from 'react-native-masked-text';
import * as Functions from '../services/functions.service';

const SoloBetStepOne = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state?.userReducer);
    const { newBet } = useSelector((state) => state?.betReducer);
    const [betInfo, setBetInfo] = useState({ title: "", amount: "" });
    const { currentGame } = useSelector((state) => state?.betReducer);

    useEffect(() => {
        navigation.setOptions({
            title: currentGame
        });
    }, [])

    const handleMoveToNextStep = async (info) => {

        if (info?.title === "" || info?.amount === "") {
            Alert.alert("Erro", "Preencha todos os campos");
            return false;
        }

        console.log({info})

        info.amount = info?.amount?.replace("R$", "")?.replace(/[^\w\*]/g, "");
        info.amount = parseInt(info?.amount);
        console.log({info})

        try {
            dispatch(setNewBet({ ...newBet, title: info?.title, amount: info?.amount }));
            navigation.navigate('SoloBetStepTwo');
        } catch (error) {

        }

    }

    return (
        <View style={{ ...Styles.container }}>
            <Text style={Styles.titlePrimary}>PASSO 1</Text>
            <Text style={Styles.buttonSecondaryText}>Digite os dados da sua aposta</Text>
            <Text style={Styles.tipText}>Descreva sua aposta pelo nome</Text>
            <TextInput style={Styles.textInput} autoCapitalize="none" defaultValue={betInfo?.title} onChangeText={(e) => setBetInfo({ ...betInfo, title: e })} placeholder="Nome da aposta" placeholderTextColor={colors.primary} />
            <Text style={Styles.tipText}>Valor</Text>
            <TextInputMask type={'money'} options={{ precision: 2, separator: ',', delimiter: '.', unit: "R$", suffixUnit: "" }}
                value={betInfo.amount} onChangeText={text => { setBetInfo({ ...betInfo, amount: text }) }} style={Styles.textInput}
                placeholder="R$" placeholderTextColor={colors.primary} autoCapitalize="none"
            />
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