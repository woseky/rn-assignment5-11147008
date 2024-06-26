import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { BlurView } from 'expo-blur';

const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <Image style={styles.profilePic} source={require('../assets/profiles.png')} />
        </View>
        <View style={styles.headerContent}>
          <Text style={[styles.greeting, { color: theme.color }]}>Welcome back,</Text>
          <Text style={[styles.username, { color: theme.color, fontWeight: 'bold' }]}>Eric Atsu</Text>
        </View>
        <TouchableOpacity style={styles.searchIcon}>
        <BlurView intensity={0} style={styles.actionImageContainer}>
          <Image source={require('../assets/search.png')} style={styles.searchImage} />
        </BlurView>
        </TouchableOpacity> 
       
      </View>

      <View style={styles.cardContainer}>
        <Image style={styles.cardImage} source={require('../assets/cards.png')} />
      </View>

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.actionButton}>
          <BlurView intensity={0} style={styles.actionImageContainer}>
            <Image style={styles.actionImage} source={require('../assets/send.png')} />
          </BlurView>
          <Text style={[styles.actionText, { color: theme.color }]}>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <BlurView intensity={0} style={styles.actionImageContainer}>
            <Image style={styles.actionImage} source={require('../assets/receive.png')} />
          </BlurView>
          <Text style={[styles.actionText, { color: theme.color }]}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <BlurView intensity={0} style={styles.actionImageContainer}>
            <Image style={styles.actionImage} source={require('../assets/loan.png')} />
          </BlurView>
          <Text style={[styles.actionText, { color: theme.color }]}>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <BlurView intensity={0} style={styles.actionImageContainer}>
            <Image style={styles.actionImage} source={require('../assets/topUp.png')} />
          </BlurView>
          <Text style={[styles.actionText, { color: theme.color }]}>Topup</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionSection}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={[styles.transactionHeader, { color: theme.color, fontWeight: 'bold' }]}>Transaction</Text>
          <TouchableOpacity>
            <Text style={[styles.sellAll, { color: theme.color }]}>Sell All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.transactionRow}>
        <BlurView intensity={0} style={styles.actionImageContainer}>
          <View style={[styles.transactionIconContainer, { backgroundColor: theme.iconBackground }]}>
            <Image style={styles.transactionIcon} source={require('../assets/apples.png')} />
            </View>
          </BlurView>
          <View style={styles.transactionDetails}>
            <Text style={[styles.transactionName, { color: theme.color }]}>Apple Store</Text>
            <Text style={[styles.transactionCategory, { color: theme.color }]}>Entertainment</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: theme.color }]}>- $5.99</Text>
        </View>

        <View style={styles.transactionRow}>
        <BlurView intensity={0} style={styles.actionImageContainer}>
          <View style={[styles.transactionIconContainer, { backgroundColor: theme.iconBackground }]}>
            <Image style={styles.transactionIcon} source={require('../assets/spotify.png')} />
          </View>
          </BlurView>
          <View style={styles.transactionDetails}>
            <Text style={[styles.transactionName, { color: theme.color }]}>Spotify</Text>
            <Text style={[styles.transactionCategory, { color: theme.color }]}>Music</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: theme.color }]}>- $12.99</Text>
        </View>

        <View style={styles.transactionRow}>
        <BlurView intensity={0} style={styles.actionImageContainer}>
          <View style={[styles.transactionIconContainer, { backgroundColor: theme.iconBackground }]}>
            <Image style={styles.transactionIcon} source={require('../assets/moneyTransfer.png')} />
          </View>
          </BlurView>
          <View style={styles.transactionDetails}>
            <Text style={[styles.transactionName, { color: theme.color }]}>Money Transfer</Text>
            <Text style={[styles.transactionCategory, { color: theme.color }]}>Transaction</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: theme.color }]}>$300</Text>
        </View>

        <View style={styles.transactionRow}>
        <BlurView intensity={0} style={styles.actionImageContainer}>
          <View style={[styles.transactionIconContainer, { backgroundColor: theme.iconBackground }]}>
            <Image style={styles.transactionIcon} source={require('../assets/grocery.png')} />
          </View>
          </BlurView>
          <View style={styles.transactionDetails}>
            <Text style={[styles.transactionName, { color: theme.color }]}>Grocery</Text>
            <Text style={[styles.transactionCategory, { color: theme.color }]}>Shopping</Text>
          </View>
          <Text style={[styles.transactionAmount, { color: theme.color }]}>- $88</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  profileContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  profilePic: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerContent: {
    flex: 1,
    marginLeft: 16,
  },
  greeting: {
    fontSize: 16,
    color: '#888888',
    fontWeight: '300',
  },
  username: {
    fontSize: 24,
    color: '#ffffff',
  },
  searchIcon: {
    padding: 10,
  },
  searchImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    tintColor: 'e0e0e0',
  },
  cardContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionImageContainer: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  actionImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: 'black',
  },
  actionText: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 5,
  },
  transactionSection: {
    padding: 16,
  },
  transactionHeader: {
    fontSize: 18,
    color: '#ffffff',
  },
  sellAll: {
    fontSize: 14,
    color: 'Blue',
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  transactionIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#333333', // Added background color for better visibility
  },
  transactionIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionName: {
    fontSize: 16,
    color: '#ffffff',
  },
  transactionCategory: {
    fontSize: 14,
    color: '#888888',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default HomeScreen;
