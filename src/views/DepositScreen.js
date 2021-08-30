import React, { useEffect, useState } from 'react';
import {
    Alert,
    View,
    TouchableOpacity,
    Text,
    TextInput,
} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { connect, useSelector, useDispatch } from 'react-redux';
import { setUser, setLoadingModalVisible } from '../actions/index';
import Styles, { colors } from '../assets/styles';
// Images
import cardIcon from '../assets/images/icon-card.png';

// Services
import * as Functions from '../services/functions.service';

// Controllers
import * as TransactionsController from '../controllers/transactions.controller';

// Components
import DoubleMenu from '../assets/components/DoubleMenu';
import GradientButton from '../assets/components/GradientButton';
import LoadingModal from '../assets/components/LoadingModal';
import { TextInputMask } from 'react-native-masked-text';

const DepositScreen = (props) => {

    const navigation = useNavigation();
    const { user } = useSelector((state) => state?.userReducer);
    const dispatch = useDispatch();
    const [depositInfo, setDepositInfo] = useState({ name: "", cardNumber: "", expirationDate: "", cvv: "", cpf: "", amount: "" });

    const handleDeposit = async (info) => {
        if (info?.name === "" || info?.cardNumber == "" || info?.expirationDate == "" || info?.cvv == "" || info?.cpf == "" || info?.amount == "") {
            Alert.alert("Erro", "Preencha todos os campos");
            return false;
        }

        info.cardNumber = info?.cardNumber.replace(/ /g, "");
        info.expirationDate = info?.expirationDate.replace("/", "");
        info.cpf = info?.cpf.replace(/[^\w\*]/g, "");
        info.amount = info?.amount.replace("R$","").replace(/[^\w\*]/g,"");
        info.amount = parseInt(info?.amount);

        try {
            dispatch(setLoadingModalVisible(true));
            info.id = user?.id;
            let result = await TransactionsController.deposit(info);
            if (result?.error) {
                Alert.alert("Erro", result?.error);
                dispatch(setLoadingModalVisible(false));
                return false;
            }
            dispatch(setUser(result?.user));
            dispatch(setLoadingModalVisible(false));
            navigation.navigate('Home');
            return true;
        } catch (error) {
            dispatch(setLoadingModalVisible(false));
            Alert.alert("Erro", error);
        }
    }
    useEffect(() => {
        console.log({ user });
    }, [])

    return (
        <View style={{ ...Styles.container }}>
            <LoadingModal />
            <DoubleMenu firstOption="Forma de Pagamento" secondOption="Dados e informações" />
            <Text style={Styles.tipText}>Nome do titular</Text>
            <TextInput style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setDepositInfo({ ...depositInfo, name: e })} defaultValue={depositInfo.name} placeholder="Nome do titular" placeholderTextColor={colors.primary} />
            <Text style={Styles.tipText}>Número do cartão</Text>
            {/* <TextInput style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setDepositInfo({ ...depositInfo, cardNumber: e })} defaultValue={depositInfo.cardNumber} placeholder="Cartão de crédito" placeholderTextColor={colors.primary} /> */}

            <TextInputMask type={'credit-card'} options={{ obfuscated: false, issuer: 'visa-or-mastercard' }} value={depositInfo.cardNumber}
                onChangeText={text => { setDepositInfo({ ...depositInfo, cardNumber: text }) }} style={Styles.textInput}
                placeholder="Cartão de crédito" placeholderTextColor={colors.primary} autoCapitalize="none"
            />

            <Text style={Styles.tipText}>Data de validade</Text>
            {/* <TextInput style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setDepositInfo({ ...depositInfo, expirationDate: e })} defaultValue={depositInfo.expirationDate} placeholder="MM/AA" placeholderTextColor={colors.primary} /> */}
            <TextInputMask type={'custom'} options={{ mask: "99/99" }} value={depositInfo.expirationDate}
                onChangeText={text => { setDepositInfo({ ...depositInfo, expirationDate: text }) }} style={Styles.textInput}
                placeholder="MM/AA" placeholderTextColor={colors.primary} autoCapitalize="none"
            />

            <Text style={Styles.tipText}>Código de segurança</Text>
            {/* <TextInput style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setDepositInfo({ ...depositInfo, cvv: e })} defaultValue={depositInfo.cvv} placeholder="CVV" placeholderTextColor={colors.primary} /> */}
            <TextInputMask type={'custom'} options={{ mask: "999" }} value={depositInfo.cvv}
                onChangeText={text => { setDepositInfo({ ...depositInfo, cvv: text }) }} style={Styles.textInput}
                placeholder="CVV" placeholderTextColor={colors.primary} autoCapitalize="none"
            />

            <Text style={Styles.tipText}>CPF</Text>
            {/* <TextInput style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setDepositInfo({ ...depositInfo, cpf: e })} defaultValue={depositInfo.cpf} placeholder="CPF" placeholderTextColor={colors.primary} /> */}
            <TextInputMask type={'cpf'} options={{}} value={depositInfo.cpf}
                onChangeText={text => { setDepositInfo({ ...depositInfo, cpf: text }) }} style={Styles.textInput}
                placeholder="CPF" placeholderTextColor={colors.primary} autoCapitalize="none"
            />
            <Text style={Styles.tipText}>Valor</Text>
            {/* <TextInput style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setDepositInfo({ ...depositInfo, amount: e })} defaultValue={depositInfo.amount} placeholder="R$" placeholderTextColor={colors.primary} /> */}
            <TextInputMask type={'money'} options={{ precision: 2, separator: ',', delimiter: '.', unit: "R$", suffixUnit: ""}}
                value={depositInfo.amount} onChangeText={text => { setDepositInfo({ ...depositInfo, amount: text }) }} style={Styles.textInput}
                placeholder="R$" placeholderTextColor={colors.primary} autoCapitalize="none"
            />

            <TouchableOpacity style={Styles.buttonPrimary} onPress={() => handleDeposit(depositInfo)}>
                <Text style={Styles.buttonPrimaryText}>FAZER DEPÓSITO</Text>
            </TouchableOpacity>

        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(DepositScreen);