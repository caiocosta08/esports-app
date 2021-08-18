import React, { useState } from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet,
    Pressable
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { connect, useDispatch } from 'react-redux';
import Styles from '../styles';
import { colors } from '../styles';
import { setLoadingModalVisible } from '../../actions/index';
// Images
import logo from '../images/logo.png';
import { useSelector } from 'react-redux';


const LoadingModal = ({ quantity, notChecked, ...props }) => {

    const { loadingModalVisible } = useSelector(state => state?.userReducer);
    const dispatch = useDispatch();

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={loadingModalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                dispatch(setLoadingModalVisible(!loadingModalVisible));
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Carregando...</Text>
                </View>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingModal);