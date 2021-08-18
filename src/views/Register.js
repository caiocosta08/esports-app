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
import { connect, useDispatch } from 'react-redux';
import { setUser } from '../actions/'
import Styles, { colors } from '../assets/styles';

// Images
import logo from '../assets/images/logo.png';

import * as UsersController from '../controllers/users.controller';

const Register = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [userToRegister, setUserToLogin] = useState({ nickname: "", name: "", email: "", password: "", cpf: "", phone: "", image_url: "", confirmPassword: "" });

    const handleRegisterUser = async (user) => {
        if (user?.nickname === "" || user?.name === "" || user?.email == "" || user?.password == "" || user?.cpf == "" || user?.phone == "" || user?.confirmPassword == "") {
            Alert.alert("Erro", "Preencha todos os campos");
            return false;
        }
        try {
            let result = await UsersController.register(user);
            if (result?.error) {
                Alert.alert("Erro", result?.error);
                return false;
            }
            dispatch(setUser(result?.user));
            navigation.navigate('Home');
            return true;
        } catch (error) {
            Alert.alert("Erro", error);
        }
    }

    return (
        <View style={Styles.container}>
            <Image source={logo} style={Styles.logo} />
            {/* <TextInput style={Styles.textInput} onChangeText={(e) => setUserToLogin({ ...userToRegister, email: e })} defaultValue={userToRegister.email} placeholder="Criar apelido" placeholderTextColor={colors.primary} /> */}
            {/* <Text style={Styles.tipText}>Ex: @mestre.dos.magos</Text> */}
            <TextInput style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setUserToLogin({ ...userToRegister, nickname: e })} defaultValue={userToRegister.nickname} placeholder="Nickname" placeholderTextColor={colors.primary} />
            <TextInput style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setUserToLogin({ ...userToRegister, name: e })} defaultValue={userToRegister.name} placeholder="Name" placeholderTextColor={colors.primary} />
            <TextInput style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setUserToLogin({ ...userToRegister, email: e })} defaultValue={userToRegister.email} placeholder="E-mail" placeholderTextColor={colors.primary} />
            <TextInput style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setUserToLogin({ ...userToRegister, cpf: e })} defaultValue={userToRegister.cpf} placeholder="CPF" placeholderTextColor={colors.primary} />
            <TextInput style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setUserToLogin({ ...userToRegister, phone: e })} defaultValue={userToRegister.phone} placeholder="Telefone" placeholderTextColor={colors.primary} />
            <TextInput style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setUserToLogin({ ...userToRegister, password: e })} defaultValue={userToRegister.password} placeholder="Senha" placeholderTextColor={colors.primary} />
            <TextInput style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setUserToLogin({ ...userToRegister, confirmPassword: e })} defaultValue={userToRegister.confirmPassword} placeholder="Confirmar senha" placeholderTextColor={colors.primary} />
            <TouchableOpacity style={Styles.buttonPrimary} onPress={() => handleRegisterUser(userToRegister)}>
                <Text style={Styles.buttonPrimaryText}>CADASTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonSecondary} onPress={() => navigation.navigate('Login')}>
                <Text style={Styles.buttonSecondaryText}>LOGIN</Text>
            </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);