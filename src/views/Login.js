import React, { useEffect, useState } from 'react';
import {
    Alert,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    Image,
    KeyboardAvoidingView,
    Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { connect, useDispatch } from 'react-redux';
import { setUser } from '../actions/'
import Styles from '../assets/styles';
// Images
import logo from '../assets/images/logo.png';

import * as UsersController from '../controllers/users.controller';

const Login = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [userToLogin, setUserToLogin] = useState({ email: "", password: "" });

    const handleLoginUser = async (user) => {
        if (user?.email === "" || user?.password == "") {
            Alert.alert("Erro", "Preencha todos os campos");
            return false;
        }
        try {
            let result = await UsersController.login(user);
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
        <KeyboardAvoidingView style={Styles.container} behavior="padding">
            <Image source={logo} style={Styles.logo} />
            <TextInput secureTextEntry={false} style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setUserToLogin({ ...userToLogin, email: e })} defaultValue={userToLogin.email} placeholder="E-mail" placeholderTextColor="#5656B4" />
            <TextInput secureTextEntry={true} style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setUserToLogin({ ...userToLogin, password: e })} defaultValue={userToLogin.password} placeholder="Senha" placeholderTextColor="#5656B4" />
            <TouchableOpacity style={Styles.buttonPrimary} onPress={() => handleLoginUser(userToLogin)}>
                <Text style={Styles.buttonPrimaryText}>ENTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonSecondary} onPress={() => navigation.navigate('ResetPassword')}>
                <Text style={Styles.buttonSecondaryText}>ESQUECI MINHA SENHA</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};


Login.navigationOptions = ({ navigation }) => ({
    title: "asdlskjd",
})

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

export default connect(mapStateToProps, mapDispatchToProps)(Login);