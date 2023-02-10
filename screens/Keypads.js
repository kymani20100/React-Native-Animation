import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

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

const Keypads = () => {
    
  const renderItem = ({ item }) => (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{item.value}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={keypadData}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        margin: 5,
      },
      buttonText: {
        fontSize: 30,
      },
})

export default Keypads;

