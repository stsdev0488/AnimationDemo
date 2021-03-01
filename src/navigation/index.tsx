import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NameScreen } from '../screens/NameScreen';
import { BirthdayScreen } from '../screens/BirthdayScreen';
import { NumberScreen } from '../screens/NumberScreen';
import { VerifyScreen } from '../screens/VerifyScreen';
import { SuccessScreen } from '../screens/SuccessScreen';

const MainNavigator = createStackNavigator();
export const MainNavigation = () => (
  <MainNavigator.Navigator
    headerMode="none"
    screenOptions={{ animationEnabled: false }}
  >
    <MainNavigator.Screen name="NameScreen" component={NameScreen} />
    <MainNavigator.Screen name="BirthdayScreen" component={BirthdayScreen} />
    <MainNavigator.Screen name="NumberScreen" component={NumberScreen} />
    <MainNavigator.Screen name="VerifyScreen" component={VerifyScreen} />
    <MainNavigator.Screen name="SuccessScreen" component={SuccessScreen} />
  </MainNavigator.Navigator>
);
