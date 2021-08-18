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


const DoubleMenu = ({ firstOption, secondOption, ...props }) => {

    return (
        <View style={Styles.doubleMenuContainer}>
            <Text style={Styles.doubleMenuTitle}>{firstOption}</Text>
            <View style={{ width: 2, height: '100%', backgroundColor: colors.secondary }} />
            <Text style={Styles.doubleMenuTitle}>{secondOption}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(DoubleMenu);