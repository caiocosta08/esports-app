import React, { } from 'react';
import {
    TouchableOpacity,
    Text,
    Image,
    View
} from 'react-native';
import { connect } from 'react-redux';
import Styles, { colors } from '../styles';
import * as Functions from '../../services/functions.service';

const MoneyCard = ({ value, onPress, ...props }) => {

    return (
        <TouchableOpacity onPress={onPress} style={Styles.moneyCardContainer}>
            <Text style={Styles.moneyCardText}>{Functions.centsToBrl(value)}</Text>
        </TouchableOpacity>
    );
};

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MoneyCard);