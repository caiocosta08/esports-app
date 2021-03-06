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
import userIcon from '../images/icon-user.png';
import { LinearGradient } from 'expo-linear-gradient';


const CircleButton = ({ photo, onPress, ...props }) => {

    return (
        <TouchableOpacity onPress={onPress} style={{ ...Styles.circleImageContainer }}>
            {/* <Image source={{ uri: photo }} style={Styles.circleImage} /> */}
            <Image source={photo} style={Styles.circleImage} />
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

export default connect(mapStateToProps, mapDispatchToProps)(CircleButton);