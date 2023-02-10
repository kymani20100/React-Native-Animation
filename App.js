import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from "styled-components";
import { AppRegistry, View, Text } from "react-native";
import { name as appName } from "./app.json";
import { NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {theme} from "./styling/theme";
import { Provider as PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Roboto_100Thin, Roboto_300Light, Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";

function FavoriteScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorites!</Text>
    </View>
  );
}

function RecentScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Recents!</Text>
    </View>
  );
}

function ContactScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contacts!</Text>
    </View>
  );
}

import KeypadDial from './screens/KeypadDial';
import FavoritesScreen from './screens/FavoritesScreen';
import RecentsScreen from './screens/RecentsScreen';
import Render from './screens/Render';

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin, Roboto_300Light, Roboto_400Regular, Roboto_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NativeBaseProvider>
        <PaperProvider>
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Favorites') {
              iconName = focused ? 'ios-star' : 'ios-star-sharp';
            } else if (route.name === 'Recents') {
              iconName = focused ? 'ios-time' : 'ios-time-sharp';
            }else if (route.name === 'Contacts') {
              iconName = focused ? 'ios-person-circle' : 'ios-person-circle-sharp';
            }else if (route.name === 'Keypad') {
              iconName = focused ? 'ios-keypad' : 'ios-keypad';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007cff',
          tabBarInactiveTintColor: '#a2a2a2',
          tabBarLabelStyle: {fontFamily: 'Roboto_400Regular', marginBottom: 3}
        })}
        
      >
        <Tab.Screen options={{ headerShown: false }} name="Favorites" component={Render} />
        <Tab.Screen options={{ headerShown: false }} name="Recents" component={RecentsScreen} />
        <Tab.Screen options={{ headerShown: false }} name="Contacts" component={ContactScreen} />
        <Tab.Screen options={{ headerShown: false }} name="Keypad" component={KeypadDial} />
      </Tab.Navigator>
    </NavigationContainer>
    </PaperProvider>                               
    </NativeBaseProvider>
    </ThemeProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
