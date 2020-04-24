import  React from 'react'
import { Image, View, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import logo from '../../assets/logo.png'
import camera from '../../assets/camera.png'
import styles from './styles'

 export default function LogoTitleFeed() {
  const navigation = useNavigation();

  function navigateToNew(){
    navigation.navigate('New');
  }

    return (
    <View style={ styles.header}>
      
        <Image style={styles.headerTitle} source={logo} />
      
      <TouchableOpacity style={styles.headerCameraButton}onPress={navigateToNew}>
        <Image style={styles.headerCamera} source={camera}/>
      </TouchableOpacity>
    </View>
    );
  }

  