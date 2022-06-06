import React from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../styles/colors';

const CustomBottomTab = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        backgroundColor: Colors.primary,
        justifyContent: 'space-evenly',
        position: 'absolute',
        bottom: 10,
        left: 20,
        right: 20,
        borderRadius: 20,
        elevation: 10,
      }}>
      <TouchableOpacity>
        <AntDesign name="home" size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="search1" size={32} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="user" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CustomBottomTab;
