import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Redux
import { store } from "./src/Store";
import { Provider } from 'react-redux';

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
  headerTitleStyle: { color: colors.light }
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Walkthrough" component={Walkthrough} options={{ ...headerOptions, title: ""}} />
          <Stack.Screen name="Login" component={Login} options={{ ...headerOptions, }} />
          <Stack.Screen name="Register" component={Register} options={{ ...headerOptions, }} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ ...headerOptions, }} />
          <Stack.Screen name="Home" component={Home} options={{ ...headerOptions, }} />
          <Stack.Screen name="DepositScreen" component={DepositScreen} options={{ ...headerOptions, title: "Depositar" }} />
          <Stack.Screen name="DepositMenu" component={DepositMenu} options={{ ...headerOptions, title: "Depositar" }} />
          <Stack.Screen name="ChoiceBetType" component={ChoiceBetType} options={{ ...headerOptions, title: "Free Fire" }} />
          <Stack.Screen name="SoloBetStepOne" component={SoloBetStepOne} options={{ ...headerOptions, title: "Free Fire - 1 vs 1" }} />
          <Stack.Screen name="SoloBetStepTwo" component={SoloBetStepTwo} options={{ ...headerOptions, title: "Free Fire - 1 vs 1" }} />
          <Stack.Screen name="SoloBetStepThree" component={SoloBetStepThree} options={{ ...headerOptions, title: "Free Fire - 1 vs 1" }} />
          <Stack.Screen name="MyBets" component={MyBets} options={{ ...headerOptions, title: "Minhas Apostas" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;