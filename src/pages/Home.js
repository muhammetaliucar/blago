import React from 'react';
import {View, Image, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Colors} from '../styles/colors';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <TouchableOpacity onPress={() => auth().signOut()}>
          <Text style={{color: 'red'}}>Hello</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
