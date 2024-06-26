import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { ThemeContext, themes } from '../context/ThemeContext';

const SettingsScreen = ({ navigation }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.color }]}>Settings</Text>

      <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('Language')}>
        <Text style={[styles.optionText, { color: theme.color }]}>Language</Text>
        <View style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('MyProfile')}>
        <Text style={[styles.optionText, { color: theme.color }]}>My Profile</Text>
        <View style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('ContactUs')}>
        <Text style={[styles.optionText, { color: theme.color }]}>Contact Us</Text>
        <View style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('ChangePassword')}>
        <Text style={[styles.optionText, { color: theme.color }]}>Change Password</Text>
        <View style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer} onPress={() => navigation.navigate('PrivacyPolicy')}>
        <Text style={[styles.optionText, { color: theme.color }]}>Privacy Policy</Text>
        <View style={styles.arrowIcon} />
      </TouchableOpacity>

      <View style={styles.themeContainer}>
        <Text style={[styles.themeText, { color: theme.color }]}>Theme</Text>
        <Switch
          value={theme === themes.dark}
          onValueChange={toggleTheme}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={theme === themes.dark ? '#00ff00' : '#f4f3f4'} // Green thumb color in dark mode
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    alignSelf: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
  },
  arrowIcon: {
    width: 10,
    height: 10,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#ccc',
    transform: [{ rotate: '45deg' }],
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 16,
  },
  themeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
