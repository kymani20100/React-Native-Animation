import { StyleSheet, View, FlatList, TouchableOpacity, Vibration } from 'react-native'
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import TextOverflow from '../components/TextOverflow';
import { SafeArea } from '../components/SafeArea';
import { Ionicons, MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import {Fab, Container, Center, Heading, HStack, Pressable, Icon, Text, Box, IconButton} from "native-base";

const keypadData = [
    { key: '1', value: '1' },
    { key: '2', value: '2' },
    { key: '3', value: '3' },
    { key: '4', value: '4' },
    { key: '5', value: '5' },
    { key: '6', value: '6' },
    { key: '7', value: '7' },
    { key: '8', value: '8' },
    { key: '9', value: '9' },
    { key: '*', value: '*' },
    { key: '0', value: '0' },
    { key: '#', value: '#' },
];

const KeypadDial = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleNumberPress = (number) => {
        Vibration.vibrate(50);
        setPhoneNumber(phoneNumber + number);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleNumberPress(item.value)}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{item.value}</Text>
            </View>
        </TouchableOpacity>
      );
    
      return (
        // <SafeArea>
        //     <View style={styles.container}>
        //      <View style={styles.displayContainer}>
        //         <View style={styles.dialledContainer}>
        //             <TextOverflow>{phoneNumber}</TextOverflow>
        //         </View>
        //         <View>
        //             <Text style={styles.AddContact}>{phoneNumber && ('+ Add Contacts')}</Text>
        //         </View>
        //     </View>
        //   <FlatList
        //     data={keypadData}
        //     numColumns={3}
        //     renderItem={renderItem}
        //     keyExtractor={item => item.key}
        //   />
        //   </View>
        // </SafeArea>
        <Center bg="#FFF">
        <StatusBar bg="#FFF" barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack bg="#FFF" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
        <HStack alignItems="center">
          <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="#007cff" />} />
          <Text color="#007cff" fontSize="20" fontWeight="bold">
            LinkApp
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="#007cff" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="#007cff" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="#007cff" />} />
        </HStack>
      </HStack>



    </Center>
      );
}

export default KeypadDial

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonContainer: {
        flex: 1,
        height: 55,
        width: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#e5e5e5',
        backgroundColor: '#e5e5e5',
        borderRadius: 50,
        margin: 10,
      },
      buttonText: {
        fontSize: 35,
        color: '#020202',
        fontFamily: 'Roboto_500Medium'
      },
      phoneNumber: {
        fontSize: 35,
        color: '#020202',
        fontFamily: 'Roboto_400Regular'
      },
      AddContact: {
        fontSize: 14,
        color: '#007cff',
        textDecorationLine: 'underline',
        fontFamily: 'Roboto_300Light'
      },
      displayContainer: {
        flexDirection: 'column',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      dialledContainer: {
        width: '95%',
        flexDirection: 'row',
        overflow: 'scroll',
        marginTop: 90,
      }
})