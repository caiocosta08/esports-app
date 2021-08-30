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
import groupIcon from '../images/icon-group-bet.png';
import singleIcon from '../images/icon-single-bet.png';
import { LinearGradient } from 'expo-linear-gradient';

// Services
import * as Functions from '../../services/functions.service';


const BetListItem = ({ title, status, date, amount, type, onPress, ...props }) => {

    return (
        <TouchableOpacity onPress={onPress} style={{ ...Styles.userListItemContainer, marginVertical: 20 }}>
            <View style={{ width: '100%', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ flex: 1 }}>
                    <View style={{ marginVertical: 1, width: '100%', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'flex-end' }}>
                        <Text style={{ ...Styles.userListItemTitle, textAlign: 'left', flex: 0 }}>{title}</Text>
                        {status === "invited" && <Text style={{ ...Styles.userListItemTitle, textAlign: 'left', flex: 0, color: colors.primary, fontSize: 8, fontWeight: '900' }}>CONVIDADO</Text>}
                        {status === "accepted" && <Text style={{ ...Styles.userListItemTitle, textAlign: 'left', flex: 0, color: colors.secondary, fontSize: 8, fontWeight: '900' }}>CONFIRMADO</Text>}
                        {status === "rejected" && <Text style={{ ...Styles.userListItemTitle, textAlign: 'left', flex: 0, color: colors.softSpotlight, fontSize: 8, fontWeight: '900' }}>REJEITADO</Text>}
                    </View>
                    <View style={{ marginVertical: 1, width: '100%', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Text style={{ ...Styles.userListItemTitle, flex: 0 }}>{date}</Text>
                        <Text style={{ ...Styles.userListItemTitle, flex: 0, color: colors.secondary, fontSize: 12, fontWeight: '800' }}>{Functions.centsToBrl(amount)}</Text>
                        <Image source={groupIcon} style={{ ...Styles.icon, width: 26, height: 26 }} />
                    </View>
                </View>
                <Image source={arrowIcon} style={{ ...Styles.icon, width: 15, height: 15 }} />
            </View>
            <LinearGradient
                colors={[colors.primary, 'transparent']}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 1 }}
                style={{ ...Styles.userListItem, height: 1, backgroundColor: 'green' }}
            />
        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(BetListItem);