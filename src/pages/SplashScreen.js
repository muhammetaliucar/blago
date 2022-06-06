import React from 'react';
import {View, Text, Image, SafeAreaView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate('AuthStack');
  }, 3000);

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
