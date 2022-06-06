import React from 'react';
import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Colors} from './src/styles/colors';
import FlashMessage from 'react-native-flash-message';

import OnBoardScreen from './src/pages/OnBoardScreen';
import SignPage from './src/pages/auth/SignPage';
import LoginPage from './src/pages/auth/LoginPage';
import HomePage from './src/pages/Home';
import SplashScreen from './src/pages/SplashScreen';

import CustomBottomTab from './src/components/CustomBottomTab';

const App = () => {
  const Stack = createStackNavigator();
  const BottomTabNav = createBottomTabNavigator();

  const BottomTab = () => {
    return (
      <BottomTabNav.Navigator
        screenOptions={{headerShown: false}}
        tabBar={props => <CustomBottomTab {...props} />}>
        <BottomTabNav.Screen name="Home" component={HomePage} />
      </BottomTabNav.Navigator>
    );
  };

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoardScreenPage" component={OnBoardScreen} />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',
            headerTintColor: Colors.primary,
          }}
          name="SignScreenPage"
          component={SignPage}
        />
        <Stack.Screen name="LoginScreenPage" component={LoginPage} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen
          options={{
            headerShown: true,
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerTitle: props => (
              <Image
                source={require('./src/assets/images/logo.png')}
                style={{
                  tintColor: 'white',
                  resizeMode: 'contain',
                  width: 100,
                  height: 100,
                }}
              />
            ),
            headerStyle: {backgroundColor: Colors.primary},
          }}
          name="HomePage"
          component={BottomTab}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
