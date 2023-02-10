import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import React from 'react';
import KeyboardShift from './KeyboardShift';

const KeyboardCode = () => {

  return (
    <View>
        
        <ScrollView>
        <Image source={require('../assets/undraw.png')} style={{width: 200, height: 200}} />
        <Text>Please sign in</Text>

        <KeyboardShift style={{width: '100%'}}>
           {() => (
              <View>
              <TextInput
                 style={{
                   height: 50,
                   backgroundColor: '#fff',
                   borderWidth: 1,
                   borderColor: '#888',
                 }}
                 placeholder="Email"
               />
               <TextInput
                 style={{
                   height: 50,
                   backgroundColor: '#fff',
                   borderWidth: 1,
                   borderColor: '#888',
                   marginTop: 10
                 }}
                 secureTextEntry
                 placeholder="Password"
               />
               <TextInput
                 style={{
                   height: 50,
                   backgroundColor: '#fff',
                   borderWidth: 1,
                   borderColor: '#888',
                   marginTop: 10
                 }}
                 secureTextEntry
                 placeholder="Password"
               />

                <TextInput
                 style={{
                   height: 50,
                   backgroundColor: '#fff',
                   borderWidth: 1,
                   borderColor: '#888',
                   marginTop: 10
                 }}
                 secureTextEntry
                 placeholder="Password"
               />

<TextInput
                 style={{
                   height: 50,
                   backgroundColor: '#fff',
                   borderWidth: 1,
                   borderColor: '#888',
                   marginTop: 10
                 }}
                 secureTextEntry
                 placeholder="Password"
               />

<TextInput
                 style={{
                   height: 50,
                   backgroundColor: '#fff',
                   borderWidth: 1,
                   borderColor: '#888',
                   marginTop: 10
                 }}
                 secureTextEntry
                 placeholder="wer"
               />

<TextInput
                 style={{
                   height: 50,
                   backgroundColor: '#fff',
                   borderWidth: 1,
                   borderColor: '#888',
                   marginTop: 10
                 }}
                 secureTextEntry
                 placeholder="Last"
               />

              </View>
           )}
        </KeyboardShift>
        </ScrollView>
        
    </View>
  )
}

export default KeyboardCode

const styles = StyleSheet.create({})