import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors} from '../../styles/colors';
import styles from './button.style';

const Button = ({text, onPress, theme}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles[theme].container}>
      <Text style={styles[theme].text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
