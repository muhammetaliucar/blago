import React, {useState, useEffect} from 'react';
import {LogBox} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import auth from '@react-native-firebase/auth';

import {Colors} from './src/styles/colors';
import FlashMessage from 'react-native-flash-message';

import OnBoardScreen from './src/pages/OnBoardScreen';
import SignPage from './src/pages/auth/SignPage';
import LoginPage from './src/pages/auth/LoginPage';
import HomePage from './src/pages/Home';
import MyProfile from './src/pages/MyProfile';
import SplashScreen from './src/pages/SplashScreen';

import CustomBottomTab from './src/components/CustomBottomTab';

LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
]);

const App = () => {
  const Stack = createStackNavigator();
  const BottomTabNav = createBottomTabNavigator();
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const BottomTab = () => {
    return (
      <BottomTabNav.Navigator
        screenOptions={{headerShown: false}}
        tabBar={props => <CustomBottomTab {...props} />}>
        <BottomTabNav.Screen name="Home" component={HomePage} />
        <BottomTabNav.Screen name="MyProfile" component={MyProfile} />
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

        {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen name="HomePage" component={BottomTab} />
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
