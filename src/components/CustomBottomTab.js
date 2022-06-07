import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../styles/colors';
import {useNavigation} from '@react-navigation/native';
const CustomBottomTab = ({state}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        backgroundColor: Colors.primary,
        justifyContent: 'space-evenly',
      }}>
      {state.index === 0 ? (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <AntDesign name="home" size={32} color={Colors.secondary} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <AntDesign name="home" size={32} color="white" />
        </TouchableOpacity>
      )}
      <TouchableOpacity>
        <AntDesign name="search1" size={32} color="white" />
      </TouchableOpacity>
      {state.index === 1 ? (
        <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
          <AntDesign name="user" size={32} color={Colors.secondary} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('MyProfile')}>
          <AntDesign name="user" size={32} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomBottomTab;
