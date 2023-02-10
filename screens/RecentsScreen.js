import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import React from 'react';
import { SafeArea } from '../components/SafeArea';
import styled from "styled-components";
import {  Card } from "react-native-paper";
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Fontisto, Entypo } from '@expo/vector-icons';
import {ScrollView, Input, Center, Heading, Text, HStack, VStack, Icon, Box, IconButton, FlatList} from "native-base";
import { ListItem, Button, Avatar, } from '@rneui/themed';

import {data, icons} from '../Data/fake-api';
import ViewCard from '../components/ViewCard';
import ListItems from '../components/ListItems';

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  const RecentsScreen = () => {
    const [selected, setSelected] = React.useState(1);
    
  return (
    
      <VStack>
        <StatusBar bg="#FFF" barStyle="light-content" />
      <Box safeAreaTop bg="#FFF" />
      <HStack bg="#FFF" px="2" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
        <Input placeholder="Search contacts" bg="#f2f2f2" borderWidth="1" borderColor="#000" variant="filled" width="100%" height="7" borderRadius="15" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />}  />} InputRightElement={<Icon mr="2" size="4" color="gray.400" as={<MaterialIcons name="more-vert" />}  />} />
      </HStack>

      <ScrollView>
        <VStack w="100%" height="100%" pb="40" bg="#FFF" space={1}>
          <FlatList 
            data={data} 
            renderItem={({item}) => <ListItems props={item} />} 
            keyExtractor={item => item.id} 
            contentContainerStyle={{ }}
          />

        </VStack>
      </ScrollView>
    </VStack>
    
  )
}

export default RecentsScreen

const styles = StyleSheet.create({})