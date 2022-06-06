import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {Colors} from '../styles/colors';

export const SLIDER_WIDTH = Dimensions.get('window').width * 1;
export const ITEM_WIDTH = Dimensions.get('window').width * 1;

const OnBoardCard = ({item, index}) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={item.imgUrl} style={styles.image} />
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.4,
  },
  header: {
    color: '#222',
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: Colors.primary,
  },
  body: {
    fontSize: 14,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
    color: Colors.primary,
  },
});

export default OnBoardCard;
