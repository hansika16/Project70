import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createSwitchNavigator} from 'react-navigation'
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen'
import {BottomTab} from './components/bottomTab' 

export default function App() {
  return (
    <View style={{flex:1}}>
    <AppContainer/> 
    </View>
  );
}

const SwitchNavigator=createSwitchNavigator({
  bottomTab:{screen:BottomTab}
})


const AppContainer=createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});



