import { Text, StyleSheet, View, TextInput, Image, DeviceEventEmitter, Dimensions } from 'react-native'
import React, { Component } from 'react';
// import KeyboardEventListener from "./KeyboardUtil";
// import KeyboardEventListener from './KeyboardEventListener';
import {CustomKeyboardAvoidingView} from "./KeyboardShift";

export default class Signup extends Component {
    state = {
        KeyboardHeight: 0,
    }

    componentDidMount () {
        this.keyboardDidShowListener = DeviceEventEmitter.addListener('keyboardDidShow', this.keyboardDidShow.bind(this))
        this.keyboardDidHideListener = DeviceEventEmitter.addListener('keyboardDidHide', this.keyboardDidHide.bind(this))
    }
    
    componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
    }

    keyboardDidShow (e) {
        let newSize = Dimensions.get('window').height - e.endCoordinates.height
        this.setState({
          visibleHeight: newSize,
          topLogo: {width: 100, height: 70}
        })
      }
      
      keyboardDidHide (e) {
        this.setState({
          visibleHeight: Dimensions.get('window').height,
          topLogo: {width: Dimensions.get('window').width}
        })
      } 
    

  render() {
    return (

<View style={ [styles.container, {height: this.state.visibleHeight}] }>
   
        
        <Image style={[styles.topLogo, this.state.topLogo, ]} source={require('../assets/undraw.png')} />
        <View style={ styles.form }>

        <TextInput style={{
            height: 50,
            width: '98%',
            marginBottom: 10,
            backgroundColor: '#eee',
            borderWidth: 1,
            borderColor: '#333'
        }} placeholder="Email address" />

        <TextInput style={{
            height: 50,
            width: '98%',
            marginBottom: 10,
            backgroundColor: '#eee',
            borderWidth: 1,
            borderColor: '#333'
        }} placeholder="Email address" />

        </View>
      </View>



    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topLogo: {
        width: 300,
        height: 300
    }
})