import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../styles/colors';

const deviceSize = Dimensions.get('window');

const base_style = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: deviceSize.width * 0.3,
    alignItems: 'center',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      borderWidth: 1,
      borderColor: Colors.primary,
    },
    text: {
      color: Colors.primary,
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderWidth: 1,
      borderColor: Colors.primary,
      borderRadius: 10,
      backgroundColor: Colors.primary,
    },
    text: {
      color: 'white',
    },
  }),
};
