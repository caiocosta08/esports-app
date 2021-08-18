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


const UserListItem = ({ title, onPress, isActive, ...props }) => {

    return (
        <TouchableOpacity onPress={onPress} style={{ ...Styles.userListItemContainer, }}>
            <View style={{ flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center' }}>
                <Image source={userIcon} style={Styles.icon} />
                <Text style={{ ...Styles.userListItemTitle, color: isActive ? colors.secondary : colors.light }}>{title}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserListItem);