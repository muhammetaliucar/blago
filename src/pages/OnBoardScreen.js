import React from 'react';
import {View, SafeAreaView, Text, Image} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Button from '../components/Button';
import OnBoardCard, {SLIDER_WIDTH, ITEM_WIDTH} from '../components/OnBoardCard';
import {Colors} from '../styles/colors';
import {useNavigation} from '@react-navigation/native';

const OnBoardScreen = () => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const navigation = useNavigation();

  const data = [
    {
      title: 'Social Network',
      body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      imgUrl: require('../assets/images/onboard1.png'),
    },
    {
      title: 'Stay Connected',
      body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
      imgUrl: require('../assets/images/onboard2.png'),
    },
    {
      title: 'Lets Blog',
      body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
      imgUrl: require('../assets/images/onboard3.jpg'),
    },
    {
      title: 'Be Mobile',
      body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
      imgUrl: require('../assets/images/onboard4.jpg'),
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/images/logo.png')}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View>
          <Carousel
            layout="default"
            layoutCardOffset={9}
            ref={isCarousel}
            data={data}
            renderItem={OnBoardCard}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            onSnapToItem={index => setIndex(index)}
            useScrollView={true}
          />
          <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 10,
              marginHorizontal: 0,
              backgroundColor: Colors.primary,
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            tappableDots={true}
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Button
          onPress={() => navigation.navigate('LoginScreenPage')}
          text={'LOG IN'}
          theme={'primary'}
        />
        <Button
          text={'SIGN UP'}
          onPress={() => navigation.navigate('SignScreenPage')}
          theme={'secondary'}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardScreen;
