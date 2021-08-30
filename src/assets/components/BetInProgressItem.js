import React, { useState } from 'react';
import {
    TouchableOpacity,
    Text,
    Image,
    View
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { connect } from 'react-redux';
import Styles from '../styles';
import { colors } from '../styles';
// Images
import arrowIcon from '../images/icon-arrow-right.png';
import userBlue from '../images/icon-user-blue.png';
import userRed from '../images/icon-user-red.png';
import iconVS from '../images/icon-vs.png';
import { LinearGradient } from 'expo-linear-gradient';

// Services
import * as Functions from '../../services/functions.service';


const BetInProgressItem = ({ title, status, date, amount, type, homePlayers, awayPlayers, onPress, ...props }) => {

    const [isGroup, setIsGroup] = useState(false);

    if (homePlayers?.length > 1 && awayPlayers?.length > 1) setIsGroup(true);

    return (
        <View onPress={onPress} style={{ ...Styles.betInProgressContainer }}>
            <Text style={Styles.betInProgressTitle}>X1 DOS CRIA</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'nowrap' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={userBlue} style={Styles.icon} />
                    <Text style={Styles.buttonBIPUser}>pedrin123</Text>
                    <Text style={Styles.buttonBIPMoney}>R$10,00</Text>
                </View>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={Styles.buttonBIPMoneyMain}>PRÊMIO: R$15,00</Text>
                    <Image source={iconVS} style={{ ...Styles.icon, width: 60, height: 60, }} />
                    <TouchableOpacity style={Styles.buttonBIP}>
                        <Text style={Styles.buttonBIPText}>VER DETALHES</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={userRed} style={Styles.icon} />
                    <Text style={Styles.buttonBIPUser}>pedrin123</Text>
                    <Text style={Styles.buttonBIPMoney}>R$10,00</Text>
                </View>
            </View>

            {/* <LinearGradient
                colors={[colors.primary, 'transparent']}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 1 }}
                style={{ ...Styles.betInProgress, height: 1, backgroundColor: 'green' }}
            /> */}
        </View>
    );
};

const mapStateToProps = (state) => {
    return {
        //modal
        // modalInfoVisible: state.modalReducer.modalInfoVisible,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        //modal
        setModalInfoVisible: (modalInfoVisible) => dispatch({ type: 'SET_MODAL_INFO_VISIBLE', payload: { modalInfoVisible } }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BetInProgressItem);