import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomNavigator} from 'react-navigation-tabs';
import Facebook from'./screens/fb'
import Instagram from './screens/insta';

export default class App extends React.Component {
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook : {screen : Facebook},
  Instagram : {screen : Instagram}
})

const AppContainer = createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
