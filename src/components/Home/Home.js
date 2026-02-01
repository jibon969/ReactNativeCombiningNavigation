import React from 'react';
import {View, StyleSheet, Text, Platform} from 'react-native';

const Home = () => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.home}>
        <Text style={styles.homeTitle}>Hello, Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  home: {
    flex: 1,
    padding: 5,
    justifyContent: 'center', // vertical center
    alignItems: 'center', // horizontal center
    ...Platform.select({
      ios: {
        marginBottom: '0%',
      },
      android: {
        marginBottom: 0,
      },
    }),
  },
  homeTitle: {
    textAlign: 'center',
  },
});

export default Home;
