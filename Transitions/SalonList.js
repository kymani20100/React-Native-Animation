import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import salon from './salon';

export const ITEM_HEIGHT = height * 0.18;

const SalonList = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <FlatList 
      data={salon} 
      contentContainerStyle={{padding: 10}}
      renderItem={({item}) => {
        return <TouchableOpacity style={{marginBottom: 5, height: ITEM_HEIGHT}} onPress={() => {
            navigation.navigate('salonListDetails', {item})
        }}>
            <View style={{flex: 1, padding: SPACING}}>
                <SharedElement id={`item.${item.key}.bg`} style={[StyleSheet.absoluteFillObject]}>
                  <View style={[StyleSheet.absoluteFillObject, {backgroundColor: item.color, borderRadius: 16}]} />
                </SharedElement>

                <SharedElement id={`item.${item.key}.name`}>
                  <Text>{item.name}</Text>
                </SharedElement>
                <Text>{item.jobTitle}</Text>

                <SharedElement id={`item.${item.key}.image`} style={styles.image}>
                  <Image source={{uri: item.image}} style={styles.image} />
                </SharedElement>
                
            </View>
        </TouchableOpacity>
      }}
      keyExtractor={item => item.key} />

      <SharedElement id="general.bg">
        <View style={styles.bg} />
      </SharedElement>
      

    </View>
  )
}

export default SalonList

const styles = StyleSheet.create({
    name: {
        fontWeight: '700',
        fontSize: 18,
    },
    jobTitle: {
        fontSize: 11,
        opacity: 0.7
    },
    image: {
        width: ITEM_HEIGHT * 0.8,
        height: ITEM_HEIGHT * 0.8,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 0,
        right: 5
    },
    bg: {
        position: 'absolute',
        width,
        height,
        backgroundColor: 'red',
        transform: [{translateY: height}],
        borderRadius: 32,
    }
})