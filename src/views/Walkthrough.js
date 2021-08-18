import React from 'react';
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
import Styles from '../assets/styles';
// Images
import logo from '../assets/images/logo.png';

// Components
import DotList from '../assets/components/DotList';

const Walkthrough = (props) => {

    const navigation = useNavigation();

    return (
        <View style={{ ...Styles.container, justifyContent: 'space-evenly' }}>
            <Image source={logo} style={Styles.logo} />
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={Styles.buttonPrimary} onPress={() => navigation.navigate('Login')}>
                    <Text style={Styles.buttonPrimaryText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.buttonPrimary} onPress={() => navigation.navigate('Register')}>
                    <Text style={Styles.buttonPrimaryText}>CADASTRO</Text>
                </TouchableOpacity>
            </View>
        </View >
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

export default connect(mapStateToProps, mapDispatchToProps)(Walkthrough);