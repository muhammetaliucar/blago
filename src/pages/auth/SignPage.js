import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import Button from '../../components/Button';
import {Formik} from 'formik';

import Input from '../../components/Input';
import {Colors} from '../../styles/colors';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {makeid} from '../../helpers/makeId';

const initialValues = {
  nickname: '',
  password: '',
  email: '',
};

const handleFormSubmit = async values => {
  try {
    await auth().createUserWithEmailAndPassword(values.email, values.password);
    firestore()
      .collection('users')
      .add({
        nickname: values.nickname,
        password: values.password,
        email: values.email,
        uId: makeid(10),
      });
    showMessage({
      message: 'mission completed',
      type: 'success',
    });
  } catch (error) {
    console.log(error, 'erroo');
    showMessage({
      message: 'mission not completed',
      type: 'danger',
    });
  }
};

const SignPage = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../assets/images/sign.jpg')}
          style={{width: 200, height: 200}}
        />
        <Text style={{fontSize: 26, color: Colors.primary}}>
          Create Account
        </Text>
      </View>
      <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <View style={{alignItems: 'center'}}>
              <Input
                value={values.nickname}
                onChangeText={handleChange('nickname')}
                placeHolder={'Enter your nickname'}
                logo={'man'}
              />
              <Input
                secure={true}
                password={true}
                value={values.password}
                onChangeText={handleChange('password')}
                placeHolder={'Enter your password'}
                logo={'lock-closed'}
              />
              <Input
                value={values.email}
                onChangeText={handleChange('email')}
                placeHolder={'Enter your mail'}
                logo={'mail'}
              />
            </View>
            <Button
              text={'SIGN UP'}
              theme={'secondary'}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default SignPage;
