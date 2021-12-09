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
import { setLoadingModalVisible, setUser } from '../actions/index';

// Images
import logo from '../assets/images/logo.png';
import iconBetGroup from '../assets/images/icon-group-bet.png';
import iconBetSingle from '../assets/images/icon-single-bet.png';

// Services
import * as Functions from '../services/functions.service';
import ToggleButton from '../assets/components/ToggleButton';

// Controllers
import * as BetsController from '../controllers/bets.controller';

const SoloBetStepThree = (props) => {

    // Essa é a tela do passo 3, que no protótipo é a escolha de regras.
    // Como no MVP não teremos seleção de regras, optei por antecipar a tela do
    // passo 4 para escolha de agendamento ou aposta imediata.

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [betType, setBetType] = useState("imediate");
    const { user } = useSelector((state) => state?.userReducer);
    const { newBet } = useSelector((state) => state?.betReducer);
    const { currentGame } = useSelector((state) => state?.betReducer);

    const handleCreateBet = async (type) => {
        if (type === "") {
            Alert.alert("Erro", "Selecione um oponente antes de avançar");
            return false;
        }

        let info = {
            title: newBet?.title,
            entry_value: newBet?.amount,
            owner_id: user?.id,
            bets_types_id: 1,
            home: [user?.id],
            away: newBet?.away
        }

        try {
            dispatch(setLoadingModalVisible(true));
            let result = await BetsController.create(info);
            if (result?.error) {
                Alert.alert("Erro", result?.error);
                dispatch(setLoadingModalVisible(false));
                return false;
            }
            Alert.alert("Sucesso!", "Sua aposta foi criada! :)");
            dispatch(setLoadingModalVisible(false));
            dispatch(setUser({...user, balance: result?.new_balance}));
            navigation.navigate('Home');
            return true;
        } catch (error) {
            dispatch(setLoadingModalVisible(false));
            Alert.alert("Erro", error);
        }
    };

    useEffect(() => {
        navigation.setOptions({
            title: currentGame
        });
    }, [])

    return (
        <View style={{ ...Styles.container }}>
            <Text style={Styles.titlePrimary}>PASSO 3</Text>
            <Text style={Styles.buttonSecondaryText}>Informações da nova aposta: {newBet?.title + "\n" + newBet?.amount + "\n" + newBet?.away}</Text>
            <Text style={Styles.buttonSecondaryText}>Inicie ou agende uma aposta</Text>
            <ToggleButton onPress={() => setBetType("imediate")} title="APOSTA IMEDIATA" isActive={betType === "imediate"} />
            <ToggleButton onPress={() => setBetType("schedule")} title="APOSTA AGENDADA" isActive={betType === "schedule"} />
            <TouchableOpacity style={Styles.buttonPrimary} onPress={() => handleCreateBet(betType)}>
                <Text style={Styles.buttonPrimaryText}>{betType === "imediate" ? "APOSTAR AGORA" : "AGENDAR APOSTA"}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SoloBetStepThree);