import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import AlertScreen from '../screens/AlertScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddMyContactScreen from '../screens/AddMyContactScreen';
import AlertLayer from '../components/AlertLayer';



const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};


const AlertStack = createStackNavigator({
  Alert: AlertScreen,
  AlertLayer : AlertLayer

});

AlertStack.navigationOptions = {
  tabBarLabel: 'Alert',
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-alert${focused ? '' : '-outline'}` : 'md-alert'}
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  )
};



const ContactStack = createStackNavigator({
  Contacts: ContactScreen,
  AddMyContact : AddMyContactScreen
});

ContactStack.navigationOptions = {
  tabBarLabel: 'Contacts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-contacts${focused ? '' : '-outline'}` : 'md-link'}
    />
  )
};


export default createBottomTabNavigator(
{
 HomeStack,
 ContactStack,
 AlertStack,
 SettingsStack,
 ContactStack
},
{

 tabBarOptions :
 {activeTintColor: '#13f6af',
 inactiveTintColor: '#aaaaaa',
   style: {
    backgroundColor: '#5e7aa9',
 }
}

});
