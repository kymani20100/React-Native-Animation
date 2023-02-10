import { StatusBar } from 'expo-status-bar';
import { AppRegistry, View, Text } from "react-native";
import { name as appName } from "./app.json";

// Animation
import Stagger from './screens/Stagger';
import Colored from './screens/Colored';
import Questionnaire from './screens/Questionnaire';
import Grid from './screens/Grid';
import FloatingActionButton from './screens/FloatingActionButton';
import KeyboardCode from './screens/KeyboardCode';

export default function App() {
  return (
    <FloatingActionButton />
  );
}

AppRegistry.registerComponent(appName, () => App);