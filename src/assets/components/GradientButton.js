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


const GradientButton = ({ title, icon, onPress, ...props }) => {

    return (
        <TouchableOpacity onPress={onPress} style={Styles.gradientButtonContainer}>
            <LinearGradient
                colors={[colors.primary, 'transparent']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0.8, y: 0.2 }}
                style={Styles.gradientButton}
            >
                <Image source={icon} style={Styles.icon} />
                <Text style={{ ...Styles.gradientButtonTitle }}>{title}</Text>
            </LinearGradient>
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

export default connect(mapStateToProps, mapDispatchToProps)(GradientButton);