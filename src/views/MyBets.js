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

import { connect, useSelector, useDispatch } from 'react-redux';
import Styles, { colors } from '../assets/styles';
import { setLoadingModalVisible } from '../actions/index';
// Images
import logo from '../assets/images/logo.png';
import logoFreefire from '../assets/images/logo-freefire.png';
import logoLol from '../assets/images/logo-lol.png';

// Services
import * as Functions from '../services/functions.service';

// Components
import LoadingModal from '../assets/components/LoadingModal';
import GameListItem from '../assets/components/GameListItem';
import SectionTitle from '../assets/components/SectionTitle';
import CircleButton from '../assets/components/CircleButton';
import BetListItem from '../assets/components/BetListItem';

import * as BetsController from '../controllers/bets.controller';

const MyBets = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state?.userReducer);
    const [betsList, setBetsList] = useState([
        { id: 1, title: "x1 dos cria", status: "EM ANDAMENTO", date: "07/09/2021 | 00:00", amount: '2000', type: 'group' },
        { id: 2, title: "x1 dos cria 2", status: "EM ANDAMENTO", date: "07/09/2021 | 00:00", amount: '2000', type: 'group' },
        { id: 3, title: "x1 dos cria 3", status: "EM ANDAMENTO", date: "07/09/2021 | 00:00", amount: '2000', type: 'group' },
        { id: 4, title: "x1 dos cria 4", status: "EM ANDAMENTO", date: "07/09/2021 | 00:00", amount: '2000', type: 'group' },
    ]);

    const [bets, setBets] = useState([]);

    const handleGetBets = async () => {
        let results = await BetsController.getAll();
        if (results?.error) return false;
        setBetsList(results);
    }

    useEffect(() => {
        handleGetBets()
    }, [])

    return (
        <ScrollView style={{ width: '100%', backgroundColor: colors.dark }} showsVerticalScrollIndicator={false}>

            <View style={{ ...Styles.container, justifyContent: 'flex-start' }}>
                {/* <TouchableOpacity style={Styles.buttonPrimary}>
                    <Text style={Styles.buttonPrimaryText}>MINHAS APOSTAS</Text>
                </TouchableOpacity> */}
                {/* <SectionTitle title="Em destaque" /> */}
                {/* <Text style={{ ...Styles.tipText, fontSize: 14 }}>Em destaque</Text> */}
                {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    style={{ width: '100%', height: 100 }}
                    contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                >
                    {betsList && betsList.map(item => {
                        return (
                            <CircleButton key={item?.id} photo={item?.photo} onPress={() => navigation.navigate('ChoiceBetType')} />
                        );
                    })}
                </ScrollView> */}
                <LoadingModal />
                {/* <Image source={logo} style={Styles.logo} /> */}
                {/* <Text style={Styles.titlePrimary}>HOME</Text> */}
                {/* <Text style={Styles.titlePrimary}>{user?.email}</Text> */}
                {/* <Text style={Styles.titlePrimary}>{Functions.centsToBrl(user?.balance)}</Text> */}
                {/* <SectionTitle title="Jogos para apostar" /> */}
                {betsList && betsList.map(item => {
                    if (item?.owner_id === user?.id) return (
                        <BetListItem key={item?.id}
                            title="x1doscria" status={item?.status || "PENDING"} date="07/09/2021 | 00:00" amount={item?.entry_value || "R$00,00"} type="group"
                            onPress={() => {
                                Alert.alert("Detalhes da aposta",
                                    "Título: x1doscria\n" +
                                    "Status: " + item?.status + "\n" +
                                    "Data: " + item?.createdAt + "\n" +
                                    "Valor para entrada: " + Functions.centsToBrl(item?.entry_value) + "\n"
                                )
                            }
                            } />
                    );
                })}
                {/* <Button onPress={() => navigation.navigate('DepositMenu')} title="DEPÓSITO" /> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(MyBets);