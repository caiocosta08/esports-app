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
import Styles from '../assets/styles';

// Images
import logo from '../assets/images/logo.png';

// Components
import DotList from '../assets/components/DotList'

const ResetPassword = (props) => {

    const navigation = useNavigation();
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <View style={Styles.container}>
            {currentStep === 1 && <StepOne onPress={() => setCurrentStep(2)}/>}
            {currentStep === 2 && <StepTwo onPress={() => setCurrentStep(3)}/>}
            {currentStep === 3 && <StepThree onPress={() => setCurrentStep(1)}/>}
        </View>
    );
};

const StepOne = ({ onPress, ...props }) => {

    const navigation = useNavigation();

    return (
        <View style={Styles.secondaryContainer}>
            <Image source={logo} style={Styles.logo} />
            <Text style={Styles.titlePrimary}>REDEFINIÇÃO DE SENHA</Text>
            <DotList quantity={[1]} notChecked={[1,2]} />
            <Text style={Styles.tipText}>Enviaremos um código para o seu e-mail</Text>
            <TextInput style={Styles.textInput} placeholder="E-mail" placeholderTextColor="#5656B4" />
            <TouchableOpacity style={Styles.buttonPrimary} onPress={onPress}>
                <Text style={Styles.buttonPrimaryText}>ENVIAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonSecondary} onPress={() => navigation.navigate('Login')}>
                <Text style={Styles.buttonSecondaryText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonSecondary} onPress={() => navigation.navigate('Register')}>
                <Text style={Styles.buttonSecondaryText}>CADASTRAR</Text>
            </TouchableOpacity>
        </View>
    );
};

const StepTwo = ({ onPress, ...props }) => {

    const navigation = useNavigation();

    return (
        <View style={Styles.secondaryContainer}>
            <Image source={logo} style={Styles.logo} />
            <Text style={Styles.titlePrimary}>REDEFINIÇÃO DE SENHA</Text>
            <DotList quantity={[1,2]} notChecked={[1]} />
            <Text style={Styles.tipText}>Cheque sua caixa de entrada e caixa de spam</Text>
            <TextInput style={Styles.textInput} placeholder="Código" placeholderTextColor="#5656B4" />
            <TouchableOpacity style={Styles.buttonPrimary} onPress={onPress}>
                <Text style={Styles.buttonPrimaryText}>VALIDAR CÓDIGO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonSecondary} onPress={() => navigation.navigate('Login')}>
                <Text style={Styles.buttonSecondaryText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonSecondary} onPress={() => navigation.navigate('Register')}>
                <Text style={Styles.buttonSecondaryText}>CADASTRAR</Text>
            </TouchableOpacity>
        </View>
    );
};


const StepThree = ({ onPress, ...props }) => {

    const navigation = useNavigation();
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <View style={Styles.secondaryContainer}>
            <Image source={logo} style={Styles.logo} />
            <Text style={Styles.titlePrimary}>REDEFINIÇÃO DE SENHA</Text>
            <DotList quantity={[1,2,3]} notChecked={[]} />
            <Text style={Styles.tipText}>Digite sua nova senha</Text>
            <TextInput style={Styles.textInput} placeholder="Nova senha" placeholderTextColor="#5656B4" />
            <TextInput style={Styles.textInput} placeholder="Digite a nova senha" placeholderTextColor="#5656B4" />
            <TouchableOpacity style={Styles.buttonPrimary} onPress={onPress}>
                <Text style={Styles.buttonPrimaryText}>SALVAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonSecondary} onPress={() => navigation.navigate('Login')}>
                <Text style={Styles.buttonSecondaryText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.buttonSecondary} onPress={() => navigation.navigate('Register')}>
                <Text style={Styles.buttonSecondaryText}>CADASTRAR</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);