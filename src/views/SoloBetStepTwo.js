import React, { useEffect, useState } from 'react';
import {
    Alert,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    Image,
    Button,
    Pressable,
    ScrollView
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import Styles, { colors } from '../assets/styles';
import { connect, useSelector, useDispatch } from 'react-redux';
import { setNewBet, setLoadingModalVisible } from '../actions/index';

// Images
import logo from '../assets/images/logo.png';
import iconBetGroup from '../assets/images/icon-group-bet.png';
import iconBetSingle from '../assets/images/icon-single-bet.png';

// Services
import * as Functions from '../services/functions.service';
import * as UsersController from '../controllers/users.controller';

// Components
import UserListItem from '../assets/components/UserListItem';
import LoadingModal from '../assets/components/LoadingModal';

const SoloBetStepTwo = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state?.userReducer);
    const { newBet } = useSelector((state) => state?.betReducer);
    const { currentGame } = useSelector((state) => state?.betReducer);
    const [nickToSearch, setNickToSearch] = useState("");
    const [oponentNickname, setOponentNickname] = useState("");
    const [list, setList] = useState([]);
    const [time, setTime] = useState(0);

    useEffect(() => {
        navigation.setOptions({
            title: currentGame
        });
    }, [])

    const handleMoveToNextStep = (oponent) => {
        if (oponent === "") {
            Alert.alert("Erro", "Selecione um oponente antes de avançar");
            return false;
        }
        try {
            console.log({ oponent })
            dispatch(setNewBet({ ...newBet, away: [oponent] }));
            navigation.navigate("SoloBetStepThree");
        } catch (error) {

        }
    };

    const handleOnChange = async (text) => {
        clearInterval(time);
        setTime(
            setTimeout(() => {
                handleSearchByNickname(text)
            }, 400)
        );
    };

    const handleSearchByNickname = async (nickname) => {

        if (nickname === "") {
            Alert.alert("Erro", "Digite um nickname");
            return false;
        }
        try {
            dispatch(setLoadingModalVisible(true));
            let results = await UsersController.searchByNickname(nickname);
            if (results?.error) {
                Alert.alert("Erro", results?.error);
                dispatch(setLoadingModalVisible(false));
                return false;
            }
            console.log({ results })
            setList(results);
            dispatch(setLoadingModalVisible(false));
            return true;
        } catch (error) {
            dispatch(setLoadingModalVisible(false));
        }
    };

    return (
        <View style={{ ...Styles.container }}>
            <LoadingModal />
            <Text style={Styles.titlePrimary}>PASSO 2</Text>
            <Text style={Styles.buttonSecondaryText}>Informações da nova aposta: {newBet?.title + " - " + Functions.centsToBrl(newBet?.amount)}</Text>
            <Text style={Styles.buttonSecondaryText}>Escolha seu oponente</Text>
            <TextInput
                onChangeText={(e) => handleOnChange(e)}
                style={Styles.textInput} defaultValue={nickToSearch} autoCapitalize="none" placeholder="Pesquise pelo nick" placeholderTextColor={colors.primary} />
            <ScrollView style={{ width: '100%' }}>
                {list && list.map(item => {
                    return (
                        <UserListItem key={item?.nickname} isActive={oponentNickname === item?.id}
                            title={item?.nickname} onPress={() => setOponentNickname(item?.id)} />
                    );
                })}
            </ScrollView>
            <TouchableOpacity style={Styles.buttonPrimary} onPress={() => handleMoveToNextStep(oponentNickname)}>
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

export default connect(mapStateToProps, mapDispatchToProps)(SoloBetStepTwo);