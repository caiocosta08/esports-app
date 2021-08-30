import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
// Redux
import { store } from "./src/Store";
import { Provider, useSelector } from 'react-redux';

// Views 
import Login from './src/views/Login';
import Register from './src/views/Register';
import ResetPassword from './src/views/ResetPassword';
import Walkthrough from './src/views/Walkthrough';
import Home from './src/views/Home';
import DepositScreen from './src/views/DepositScreen';
import DepositMenu from './src/views/DepositMenu';
import ChoiceBetType from './src/views/ChoiceBetType';
import SoloBetStepOne from './src/views/SoloBetStepOne';
import SoloBetStepTwo from './src/views/SoloBetStepTwo';
import SoloBetStepThree from './src/views/SoloBetStepThree';
import MyBets from './src/views/MyBets';
import SingleBet from './src/views/SingleBet';
import Wallet from './src/views/Wallet';

// Styles
import { colors } from './src/assets/styles'

const Stack = createNativeStackNavigator();

const headerOptions = {
  headerShown: true,
  headerTintColor: colors.secondary,
  headerStyle: {
    backgroundColor: colors.dark
  },
  headerBackTitle: "",
  headerTitleStyle: { color: colors.light },
};

const fetchFonts = () => {
  return Font.loadAsync({
    'poppins-bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    'poppins-regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'chakra-regular': require('./src/assets/fonts/ChakraPetch-Regular.ttf'),
    'chakra-bold': require('./src/assets/fonts/ChakraPetch-Bold.ttf'),
  });
};

const App = () => {

  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (<AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={console.warn} />);
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Walkthrough" component={Walkthrough} options={{ ...headerOptions, title: "" }} />
          <Stack.Screen name="Login" component={Login} options={{ ...headerOptions, }} />
          <Stack.Screen name="Register" component={Register} options={{ ...headerOptions, title: "Cadastro" }} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ ...headerOptions, }} />
          <Stack.Screen name="Home" component={Home} options={{ ...headerOptions, headerBackVisible: false, gestureEnabled: false }} />
          <Stack.Screen name="DepositScreen" component={DepositScreen} options={{ ...headerOptions, title: "Depositar" }} />
          <Stack.Screen name="DepositMenu" component={DepositMenu} options={{ ...headerOptions, title: "Depositar" }} />
          <Stack.Screen name="ChoiceBetType" component={ChoiceBetType} options={{ ...headerOptions, title: "" }} />
          <Stack.Screen name="SoloBetStepOne" component={SoloBetStepOne} options={{ ...headerOptions, title: "Free Fire - 1 vs 1" }} />
          <Stack.Screen name="SoloBetStepTwo" component={SoloBetStepTwo} options={{ ...headerOptions, title: "Free Fire - 1 vs 1" }} />
          <Stack.Screen name="SoloBetStepThree" component={SoloBetStepThree} options={{ ...headerOptions, title: "Free Fire - 1 vs 1" }} />
          <Stack.Screen name="MyBets" component={MyBets} options={{ ...headerOptions, title: "Minhas Apostas" }} />
          <Stack.Screen name="SingleBet" component={SingleBet} options={{ ...headerOptions, title: "Detalhes da Aposta" }} />
          <Stack.Screen name="Wallet" component={Wallet} options={{ ...headerOptions, title: "Carteira" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;