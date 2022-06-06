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
import {useNavigation} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import Input from '../../components/Input';
import {Colors} from '../../styles/colors';
import {showMessage, hideMessage} from 'react-native-flash-message';

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const navigation = useNavigation();

  const handleFormSubmit = async values => {
    try {
      await auth().signInWithEmailAndPassword(values.email, values.password);
      showMessage({
        message: 'Login Succesfull',
        type: 'success',
      });
      navigation.reset({routes: [{name: 'HomePage'}]});
    } catch (error) {
      showMessage({
        message: 'Error',
        type: 'danger',
      });
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <View style={{flex: 0.4, justifyContent: 'center'}}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            width: 200,
            height: 200,
            resizeMode: 'contain',
            tintColor: 'white',
          }}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          flex: 0.6,
          backgroundColor: 'white',
          width: Dimensions.get('window').width * 1,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          justifyContent: 'space-evenly',
        }}>
        <Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
          {({handleChange, values, handleSubmit}) => (
            <>
              <View>
                <Input
                  value={values.email}
                  onChangeText={handleChange('email')}
                  placeHolder={'Enter your email'}
                />
                <Input
                  value={values.password}
                  onChangeText={handleChange('password')}
                  placeHolder={'Enter your password'}
                  secure={true}
                  password={true}
                />
              </View>
              <Button
                onPress={handleSubmit}
                theme={'secondary'}
                text={'Sign In'}
              />
            </>
          )}
        </Formik>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'black'}}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignScreenPage')}>
            <Text
              style={{
                color: Colors.primary,
                fontWeight: 'bold',
                marginStart: 3,
                textDecorationLine: 'underline',
              }}>
              Create
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
