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
import { LinearGradient } from 'expo-linear-gradient';


const ToggleButton = ({ title, onPress, isActive, ...props }) => {

    return (
        <TouchableOpacity onPress={onPress} style={isActive ? Styles.toggleButton : Styles.toggleButtonInactive}>
            <Text style={{ ...Styles.toggleButtonTitle }}>{title}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton);