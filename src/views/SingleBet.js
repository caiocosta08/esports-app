import React, { useEffect, useState } from 'react';
import {
    Alert,
    View,
    ScrollView,
    Text
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { connect, useSelector, useDispatch } from 'react-redux';
import Styles, { colors } from '../assets/styles';
import { setLoadingModalVisible, setUser, setCurrentBet } from '../actions/index';

// Services
import * as Functions from '../services/functions.service';

// Components
import LoadingModal from '../assets/components/LoadingModal';
import BetListItem from '../assets/components/BetListItem';

import * as BetsController from '../controllers/bets.controller';

const SingleBet = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state?.userReducer);
    const { currentBet } = useSelector((state) => state?.betReducer);
    const [betsList, setBetsList] = useState([]);

    const handleGetBets = async () => {
        let results = await BetsController.getAllByUserId(user?.id);
        if (results?.error) return false;
        console.log({ results })
        setBetsList(results);
    }

    const handleAcceptInvite = async (bet_id) => {
        if (bet_id === "") {
            Alert.alert("Erro", "Selecione a aposta que quer aceitar.");
            return false;
        }

        try {
            let result = await BetsController.changeBetPlayerStatus(bet_id, user?.id, "accepted");
            if (result?.error) {
                console.log(result?.error)
                Alert.alert("Erro", result?.error);
                return false;
            }
            Alert.alert("Sucesso!", "Você aceitou a aposta! :)");
            handleGetBets();
            dispatch(setUser({ ...user, balance: result?.new_balance }));
            return true;
        } catch (error) {
            Alert.alert("Erro", error);
            console.log("Erro", error);
        }
    };

    const handleRejectInvite = async (bet_id) => {
        if (bet_id === "") {
            Alert.alert("Erro", "Selecione a aposta que quer aceitar.");
            return false;
        }

        try {
            let result = await BetsController.changeBetPlayerStatus(bet_id, user?.id, "rejected");
            if (result?.error) {
                console.log(result?.error)
                Alert.alert("Erro", result?.error);
                return false;
            }
            Alert.alert("Sucesso!", "Você rejeitou a aposta! :)");
            handleGetBets();
            dispatch(setUser({ ...user, balance: result?.new_balance }));
            return true;
        } catch (error) {
            Alert.alert("Erro", error);
            console.log("Erro", error);
        }
    };

    const handleMoveToNextScreen = async (current_bet) => {
        if (current_bet === "") {
            Alert.alert("Erro", "Selecione a aposta que quer ver.");
            return false;
        }

        try {
            dispatch(setCurrentBet(current_bet));
            navigation.navigate("SingleBet");
            return true;
        } catch (error) {
            Alert.alert("Erro", error);
            console.log("Erro", error);
        }
    };

    useEffect(() => {
        handleGetBets()
    }, [])

    return (
        <ScrollView style={{ width: '100%', backgroundColor: colors.dark }} showsVerticalScrollIndicator={false}>
            <View style={{ ...Styles.container, justifyContent: 'flex-start' }}>
                <LoadingModal />

                <View style={Styles.cardHeader}>
                    {currentBet?.status === "accepted" && <Text style={Styles.cardTitle}>APOSTA CONFIRMADA</Text>}
                    <Text style={Styles.cardDescription}>{currentBet?.bet?.title}</Text>
                </View>

            </View>
        </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleBet);