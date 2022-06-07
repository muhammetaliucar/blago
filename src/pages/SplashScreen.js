import React, {useState, useEffect} from 'react';
import {View, Text, Image, SafeAreaView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);
  setTimeout(() => {
    {
      !userSession
        ? navigation.navigate('AuthStack')
        : navigation.navigate('HomePage');
    }
  }, 2000);

  return (
    <SafeAreaView>
      <Image
        source={require('../assets/images/splashScreenImage.png')}
        style={{
          width: Dimensions.get('window').width * 1,
          height: Dimensions.get('window').height * 1,
        }}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
