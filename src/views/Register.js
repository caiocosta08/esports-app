import React, { useState } from 'react';
import {
    Alert,
    View,
    TouchableOpacity,
    Text,
    TextInput,
    Image,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

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
    const [userToRegister, setUserToRegister] = useState({ nickname: "", name: "", email: "", password: "", cpf: "", phone: "", image_url: "", confirmPassword: "" });

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
        <KeyboardAvoidingView style={{ ...Styles.container, width: "100%" }} behavior="position">
            <ScrollView
                contentContainerStyle={{ flex: 1, minWidth: "100%", alignItems: "center" }}
                style={{ width: '100%', backgroundColor: colors.dark }}
                showsVerticalScrollIndicator={false}>
                <Image source={logo} style={Styles.logo} />
                <TextInput style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setUserToRegister({ ...userToRegister, nickname: e })} defaultValue={userToRegister.nickname} placeholder="Nickname" placeholderTextColor={colors.primary} />
                <TextInput style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setUserToRegister({ ...userToRegister, name: e })} defaultValue={userToRegister.name} placeholder="Name" placeholderTextColor={colors.primary} />
                <TextInput style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setUserToRegister({ ...userToRegister, email: e })} defaultValue={userToRegister.email} placeholder="E-mail" placeholderTextColor={colors.primary} />
                {/* <TextInput style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setUserToRegister({ ...userToRegister, cpf: e })} defaultValue={userToRegister.cpf} placeholder="CPF" placeholderTextColor={colors.primary} /> */}

                <TextInputMask type={'cpf'} options={{}} value={userToRegister.cpf}
                    onChangeText={text => { setUserToRegister({ ...userToRegister, cpf: text }) }} style={Styles.textInput}
                    placeholder="CPF" placeholderTextColor={colors.primary} autoCapitalize="none"
                />
                <TextInput style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setUserToRegister({ ...userToRegister, phone: e })} defaultValue={userToRegister.phone} placeholder="Telefone" placeholderTextColor={colors.primary} />
                <TextInput secureTextEntry={true} style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setUserToRegister({ ...userToRegister, password: e })} defaultValue={userToRegister.password} placeholder="Senha" placeholderTextColor={colors.primary} />
                <TextInput secureTextEntry={true} style={Styles.textInput} autoCapitalize="none" onChangeText={(e) => setUserToRegister({ ...userToRegister, confirmPassword: e })} defaultValue={userToRegister.confirmPassword} placeholder="Confirmar senha" placeholderTextColor={colors.primary} />
                <TouchableOpacity style={Styles.buttonPrimary} onPress={() => handleRegisterUser(userToRegister)}>
                    <Text style={Styles.buttonPrimaryText}>CADASTRAR</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
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