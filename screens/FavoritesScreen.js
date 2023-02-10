import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import React from 'react';
import { SafeArea } from '../components/SafeArea';
import styled from "styled-components";
import { Avatar, Button, Card } from "react-native-paper";
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Fontisto, Entypo } from '@expo/vector-icons';
import {ScrollView, Spacer, Center, Heading, Text, HStack, VStack, Icon, Box, IconButton, FlatList} from "native-base";

import {data, icons} from '../Data/fake-api';
import ViewCard from '../components/ViewCard';

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  const FavoritesScreen = () => {
    const [selected, setSelected] = React.useState(1);
    
  return (
    
      <VStack>
        <StatusBar bg="#FFF" barStyle="light-content" />
      <Box safeAreaTop bg="#FFF" />
      <HStack bg="#FFF" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
        <HStack alignItems="center">
          <Text color="#007cff" fontSize="20" fontWeight="bold">
            LinkApp
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={Ionicons} name="md-person-add" size="md" color="#007cff" />} />
          <IconButton icon={<Icon as={Fontisto} name="trash" size="md" color="#007cff" />} />
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="md" color="#007cff" />} />
        </HStack>
      </HStack>

      <ScrollView>
      <View>
            <FlatList 
              data={data} 
              numColumns={2} 
              renderItem={({item}) => <ViewCard props={item} color={item.background} />} 
              keyExtractor={item => item.id} 
              contentContainerStyle={{ paddingBottom: 90 }}
            />
        </View>
      </ScrollView>
    </VStack>
    
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({})