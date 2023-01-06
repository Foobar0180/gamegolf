import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

const PasswordResetScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Enter your email</Text>
      <Text style={styles.subtitle}>We are going to send you a link to reset your password.</Text>
      <TextInput style={styles.input} placeholder='Usename or email address' placeholderTextColor='#666666' />
      <Button 
        title='Reset password'
        onPress={() => navigation.navigate('Splash')} />
    </View>
  );
};

PasswordResetScreen.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    color: '#666666',
    fontSize: 16,
    textAlign: 'center'
  },
  input: {
    height: 50,
    width: 300,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',   
  },
});

export default PasswordResetScreen;