import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import * as Animatable from 'react-native-animatable';

const DURATION = 400;

import { ITEM_HEIGHT } from './SalonList';
import { detailsIcons } from './salon';
const TOP_HEADER_HEIGHT = height * 0.3;

const SalonListDetails = ({navigation, route}) => {
    const {item} = route.params;
  return (
    <View style={{flex: 1}}>
      <AntDesign 
        name='arrowleft'
        size={28}
        style={{
            padding: 12,
            position: 'absolute',
            top: SPACING * 2,
            left: SPACING,
            zIndex: 2
        }}
        color={'#333'}
        onPress={() => {navigation.goBack()}}
         />

        <SharedElement id={`item.${item.key}.bg`}>
            <View style={[StyleSheet.absoluteFillObject, {backgroundColor: item.color, borderRadius: 0, height: TOP_HEADER_HEIGHT + 32}]} />
        </SharedElement>

        <SharedElement id={`item.${item.key}.name`}>
            <Text>{item.name}</Text>
        </SharedElement>

        <SharedElement id={`item.${item.key}.image`}>
            <Image source={{uri: item.image}} style={styles.image} />
        </SharedElement>

        <SharedElement id="general.bg">
            <View style={styles.bg}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: SPACING, marginBottom: SPACING * 2 + 32}}>
                        {detailsIcons.map((detail, index) => {
                            return (
                                <Animatable.View animation='bounceIn' delay={DURATION + index * 100} key={`${detail.icon}-${index}`} style={{backgroundColor: detail.color, height: 64, width: 64, borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
                                    <AntDesign name={detail.icon} size={16} color={'white'} />
                                </ Animatable.View>
                            );
                        })}
                    </View>
                    <View>
                        {item.categories.map((category, index) => {
                            return <Animatable.View animation='fadeInUp' delay={DURATION * 2 + index * 200} key={category.key} style={{marginVertical: SPACING}}>
                                <Text style={styles.title}>{category.title}</Text>
                                {category.subcats.map((subcat, index) => {
                                    return (
                                        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: SPACING / 2}}>
                                            <View style={{height: 8, width: 8, borderRadius: 5, backgroundColor: 'gold', marginRight: SPACING}} />
                                            <Text style={styles.subTitle}>{subcat}</Text>
                                        </View>
                                    )
                                })}
                            </Animatable.View>
                        })}
                    </View>
                </ScrollView>
            </View>
        </SharedElement>
       

    </View>
  )
}

export default SalonListDetails

const styles = StyleSheet.create({
    bg: {
        position: 'absolute',
        width,
        height,
        backgroundColor: '#FFF',
        transform: [{translateY: TOP_HEADER_HEIGHT}],
        borderRadius: 32,
        padding: SPACING,
        paddingTop: 32 + SPACING
    },
    name: {
        fontWeight: '700',
        fontSize: 20,
        position: 'absolute',
        top: TOP_HEADER_HEIGHT - SPACING * 3,
        left: SPACING,
    },
    image: {
        width: ITEM_HEIGHT * 0.8,
        height: ITEM_HEIGHT * 0.8,
        resizeMode: 'contain',
        position: 'absolute',
        top: TOP_HEADER_HEIGHT - ITEM_HEIGHT * 0.8 + 10,
        right: 5
    },
    title: {
        fontWeight: '700',
        fontSize: 18,
        marginBottom: SPACING
    },
    subTitle: {
        fontSize: 15,
        opacity: 0.8,
    }
})