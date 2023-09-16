import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { MyButton } from '../../components';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';

export default function Splash({ navigation }) {



  const __getStarted = () => {
    getData('user').then(res => {
      if (!res) {
        navigation.replace('Register')
      } else {
        // navigation.replace('GetStarted')
        navigation.replace('Home')
      }
    })
  }

  useEffect(() => {
    setTimeout(() => {
      getData('user').then(res => {
        if (res) {
          navigation.replace('Home')
        }
      })
    }, 1200)
  }, [])

  return (
    <SafeAreaView style={{
      flex: 1,
      padding: 0,
      backgroundColor: colors.white,
      justifyContent: 'center',
      position: 'relative'

    }}>


      <View style={{
        position: 'absolute',
        top: 0,
        zIndex: 99
      }}>
        <Image source={require('../../assets/top.png')} style={{
          width: 150,
          height: 140,
        }} />
      </View>





      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={require('../../assets/logo.png')} style={{
          width: windowWidth,
          height: windowWidth,
          resizeMode: 'contain'
        }} />

      </View>

      <View style={{
        marginBottom: 20,
        padding: 10,
      }}>
        <MyButton title="Get Started" onPress={__getStarted} />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
