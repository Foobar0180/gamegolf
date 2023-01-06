import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const SplashScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Image source={require('../../assets/images/profile_pic.png')} style={styles.profilePic} />
      <Text style={styles.title}>Almost done!</Text>
      <Text style={[styles.subtitle, styles.spacing]}>Please check your email to confirm your account.</Text>
      <Button 
        style={styles.button}
        title='Go to Sign In'
        onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
};

SplashScreen.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#9900ff',
  },
  title: {
    fontWeight: '400',
    fontSize: 24,
    marginBottom: 20,
    color: '#FFFFFF',
  },
  subtitle: {
    color: '#D9D2E9',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  profilePic: {
    marginBottom: 20,
  },
  button: {
    color: '#FFFFFF',
  },
  spacing: {
    marginBottom: 50,
  },
});

export default SplashScreen;