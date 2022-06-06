import React, {useState} from 'react';
import {Colors} from '../styles/colors';
import {View, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

const deviceSize = Dimensions.get('window');

const Input = ({
  logo,
  placeHolder,
  onChangeText,
  value,
  password = false,
  secure = false,
}) => {
  const [locked, setLocked] = useState(true);
  return (
    <View
      style={{
        borderColor: Colors.primary,
        marginHorizontal: 20,
        padding: 5,
        borderRadius: 20,
        margin: 5,
        borderWidth: 1,
        width: deviceSize.width * 0.8,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <IonIcons name={logo} size={25} color={Colors.primary} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{borderRadius: 20, padding: 10, color: Colors.primary, flex: 1}}
        placeholder={placeHolder}
        placeholderTextColor={Colors.primary}
        secureTextEntry={secure === true ? (locked ? true : false) : false}
      />
      {password ? (
        <TouchableOpacity onPress={() => setLocked(!locked)}>
          {locked ? (
            <IonIcons name="eye" size={30} color={Colors.primary} />
          ) : (
            <IonIcons name="eye-off-sharp" size={30} color={Colors.primary} />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Input;
