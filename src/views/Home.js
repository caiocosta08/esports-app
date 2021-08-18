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

const Walkthrough = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state?.userReducer);
    const [gameList, setGameList] = useState([
        { id: 1, title: "Free Fire", photo: logoFreefire },
        { id: 2, title: "LOL", photo: logoLol },
        { id: 3, title: "LOL", photo: logoLol },
        { id: 4, title: "LOL", photo: logoLol },
        { id: 5, title: "LOL", photo: logoLol },
        { id: 6, title: "LOL", photo: logoLol },
    ]);

    useEffect(() => {
        console.log({ user });
    }, [])

    return (
        <ScrollView style={{ width: '100%', backgroundColor: colors.dark }} showsVerticalScrollIndicator={false}>

            <View style={{ ...Styles.container, justifyContent: 'flex-start' }}>
                <Text style={Styles.titlePrimary}>Saldo {Functions.centsToBrl(user?.balance)}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('MyBets')} style={Styles.buttonPrimary}>
                    <Text style={Styles.buttonPrimaryText}>MINHAS APOSTAS</Text>
                </TouchableOpacity>
                {/* <SectionTitle title="Em destaque" /> */}
                <Text style={{ ...Styles.tipText, fontSize: 14 }}>Em destaque</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}
                    style={{ width: '100%', height: 100 }}
                    contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                >
                    {gameList && gameList.map(item => {
                        return (
                            <CircleButton key={item?.id} photo={item?.photo} onPress={() => navigation.navigate('ChoiceBetType')} />
                        );
                    })}
                </ScrollView>
                <LoadingModal />
                {/* <Image source={logo} style={Styles.logo} /> */}
                {/* <Text style={Styles.titlePrimary}>HOME</Text> */}
                {/* <Text style={Styles.titlePrimary}>{user?.email}</Text> */}
                <SectionTitle title="Jogos para apostar" />
                {gameList && gameList.map(item => {
                    return (
                        <GameListItem key={item?.id} photo={item?.photo} onPress={() => navigation.navigate('ChoiceBetType')} />
                    );
                })}
                <Button onPress={() => navigation.navigate('DepositMenu')} title="DEPÓSITO" />
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