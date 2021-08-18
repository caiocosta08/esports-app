import React, { useState } from 'react';
import {
    Alert,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    Image
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { connect } from 'react-redux';
import Styles from '../styles';
import { colors } from '../styles';
// Images
import logo from '../images/logo.png';


const DotList = ({ quantity, notChecked, ...props }) => {

    return (
        <View style={{ flexDirection: 'row', flexWrap: 'nowrap', }}>
            {quantity && quantity.map((q, index) => {
                return (
                    <View key={q} style={{ width: 10, height: 10, backgroundColor: colors.secondary, margin: 10, borderRadius: 50 }} />
                );
            })}
            {notChecked && notChecked.map((q, index) => {
                return (
                    <View key={q} style={{ width: 10, height: 10, backgroundColor: colors.softSpotlight, margin: 10, borderRadius: 50 }} />
                );
            })}
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

export default connect(mapStateToProps, mapDispatchToProps)(DotList);