// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Home from './screens/Home';

export default function App() {
  return (
    <SafeAreaView style={[style.container]}>
      <Home />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
})