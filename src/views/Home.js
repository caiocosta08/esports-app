import React, { useEffect, useState, useRef } from 'react';
import {
    Alert,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    Image,
    Button,
    Pressable,
    ScrollView,
    Dimensions,

} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { connect, useSelector, useDispatch } from 'react-redux';
import Styles, { colors } from '../assets/styles';
import { logout, setLoadingModalVisible, setCurrentGame } from '../actions/index';
// Images
import logo from '../assets/images/logo.png';
import logoFreefire from '../assets/images/logo-freefire.png';
import logoLol from '../assets/images/logo-lol.png';
import backIcon from '../assets/images/icon-back.png';

// Services
import * as Functions from '../services/functions.service';

// Components
import LoadingModal from '../assets/components/LoadingModal';
import GameListItem from '../assets/components/GameListItem';
import SectionTitle from '../assets/components/SectionTitle';
import CircleButton from '../assets/components/CircleButton';
import MoneyCard from '../assets/components/MoneyCard';
import BetInProgressItem from '../assets/components/BetInProgressItem';

const Walkthrough = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state?.userReducer);
    const [gameList, setGameList] = useState([
        { id: 1, title: "Free Fire", photo: logoFreefire },
        { id: 2, title: "LOL", photo: logoLol },
    ]);

    useEffect(() => {
        if (!user?.id) {
            dispatch(logout());
            navigation.navigate('Walkthrough');
        }
    }, [])

    useEffect(() => {
        console.log({ user_id: user?.id });
        if (!user?.id) {
            dispatch(logout());
            navigation.navigate('Walkthrough');
        }
    }, [user])

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                if (user?.balance || 0) return (
                    <View style={{ flexDirection: 'row', flexWrap: 'nowrap' }}>
                        <MoneyCard onPress={() => navigation.navigate("Wallet")} value={user?.balance || 0} />
                    </View>
                )
            },
            headerLeft: () => {
                if (user?.balance || 0) return (
                    // <Button title="SAIR" onPress={() => dispatch(logout())} />
                    <TouchableOpacity onPress={() => dispatch(logout())} >
                        <Image source={backIcon} style={Styles.backIcon} />
                    </TouchableOpacity>
                )
            },
        });
    }, []);

    //temp
    const [homePlayers, setHomePlayers] = useState([
        { id: 1, username: "caio.costa" },
        { id: 2, username: "joaozinho123" },
        { id: 3, username: "pepeu.10" },
    ]);
    const [awayPlayers, setAwayPlayers] = useState([
        { id: 1, username: "pedrin123" },
        { id: 2, username: "paulo" },
        { id: 3, username: "asx18" },
    ]);

    return (
        <ScrollView style={{ width: '100%', backgroundColor: colors.dark }} showsVerticalScrollIndicator={false}>
            <View style={{ ...Styles.container, justifyContent: 'flex-start' }}>
                <TouchableOpacity onPress={() => navigation.navigate('MyBets')} style={Styles.yellowButton}>
                    <Text style={Styles.yellowButtonText}>MINHAS APOSTAS</Text>
                </TouchableOpacity>
                <Text style={{ ...Styles.tipText, fontSize: 14 }}>Em destaque</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    style={{ width: '100%', height: 100 }}
                    contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                >
                    {gameList && gameList.map(item => {
                        return (
                            <CircleButton key={item?.id} photo={item?.photo} onPress={() => dispatch(setCurrentGame(item.title)) && navigation.navigate('ChoiceBetType')} />
                        );
                    })}
                </ScrollView>
                <SectionTitle title="Apostas de Verificados" />
                <ScrollView
                    horizontal
                    pagingEnabled={true}
                    snapToAlignment={"center"}
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={0}
                    style={{ width: "100%", height: 140 }}
                    contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}
                >
                    {gameList && gameList.map(item => {
                        return (
                            <BetInProgressItem key={item?.id} homePlayers={homePlayers} awayPlayers={[awayPlayers]} title={"X1 DOS CRIA"} />
                        );
                    })}
                </ScrollView>
                <LoadingModal />
                <SectionTitle title="Jogos para apostar" />
                {gameList && gameList.map(item => {
                    return (
                        <GameListItem key={item?.id} photo={item?.photo} onPress={() => dispatch(setCurrentGame(item.title)) && navigation.navigate('ChoiceBetType')} />
                    );
                })}
                <TouchableOpacity style={{ ...Styles.buttonSecondary, marginBottom: 20 }} onPress={() => console.log(":)")}>
                    <Text style={Styles.buttonSecondaryText}>VER MAIS JOGOS</Text>
                </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(Walkthrough);