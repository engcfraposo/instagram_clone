import React, { Component } from 'react';
import {useNavigation} from '@react-navigation/native';
import { View, TouchableOpacity, Text, TextInput, Image } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import styles from './styles';
import api from '../../services/api'


export default class New extends Component {
  
  

  state = {
    preview: null,
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  };

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  handleSelectImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
         
        let prefix;
        let ext;

        [prefix, ext] = result.uri.split('.')
        ext = 'jpg'

        prefix =new Date().getTime();
        
        const preview = result.uri;
        
        const image = {
          uri: preview,
          type: result.type,
          name: `${prefix}.${ext}`
        }

        this.setState({ preview, image  });
      }

    } catch (E) {
      console.log(E);
    }

    

    
  };

  handleSubmit = async () => {

    
    
    const data = new FormData();

      data.append('image', this.state.image);
      data.append('author', this.state.author);
      data.append('place', this.state.place );
      data.append('description', this.state.description);
      data.append('hashtags', this.state.hashtags);
      
      await api.post('posts', data);

      
  }

  render() {

    const { preview } = this.state;
    return (<View style={styles.container}>

      <TouchableOpacity style={styles.selectButton} onPress={this.handleSelectImage}>
        <Text style={styles.selectButtonText}>Selecionar imagem</Text>
      </TouchableOpacity>

      {preview && <Image source={{ uri: preview }} style={{ width: 200, height: 200, alignSelf: 'center', marginTop: 10, }} />}

      

      <TextInput
        style={styles.input}
        autoCapitalize= "none"
        autoCorrect={false}
        placeholder="Nome do autor"
        placeholderTextColor="#999"
        value={this.state.author}
        onChangeText={author => this.setState({author})}
      />

      <TextInput
        style={styles.input}
        autoCapitalize= "none"
        autoCorrect={false}
        placeholder="Local da foto"
        placeholderTextColor="#999"
        value={this.state.place}
        onChangeText={place => this.setState({place})}
      />

      <TextInput
        style={styles.input}
        autoCapitalize= "none"
        autoCorrect={false}
        placeholder="Descrição"
        placeholderTextColor="#999"
        value={this.state.description}
        onChangeText={description => this.setState({description})}
      />

      <TextInput
        style={styles.input}
        autoCapitalize= "none"
        autoCorrect={false}
        placeholder="Hashtags"
        placeholderTextColor="#999"
        value={this.state.hashtags}
        onChangeText={hashtags => this.setState({hashtags})}
      />

      <TouchableOpacity style={styles.shareButton} onPress={this.handleSubmit}>
        <Text style={styles.shareButtonText}>Compartilhar</Text>
      </TouchableOpacity>
      

      
    </View>);
  }
}
