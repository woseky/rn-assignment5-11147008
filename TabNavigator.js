import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import MyCardsScreen from '../screens/MyCardsScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { ThemeContext } from '../context/ThemeContext';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = require('../assets/home.png');
          } else if (route.name === 'My Cards') {
            iconName = require('../assets/myCards.png');
          } else if (route.name === 'Statistics') {
            iconName = require('../assets/statistics.png');
          } else if (route.name === 'Settings') {
            iconName = require('../assets/settings.png');
          }

          return (
            <Image
              source={iconName}
              style={[
                styles.tabIcon,
                { tintColor: focused ? theme.color : theme.inactiveColor },
              ]}
            />
          );
        },
        tabBarActiveTintColor: theme.color,
        tabBarInactiveTintColor: theme.inactiveColor,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: 'transparent',
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Cards" component={MyCardsScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default TabNavigator;
