import React from 'react';
import { SafeAreaView, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

const SignUpScreen = ({ onSignUp, navigation }) => {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Your email address"
          placeholderTextColor="#666666"
        />
        <TextInput 
          style={styles.input} 
          placeholder="Choose a password" 
          placeholderTextColor="#666666" />
        <TextInput 
          style={styles.input} 
          placeholder="Confirm your password" 
          placeholderTextColor="#666666" />
        <Button title="Sign Up" onPress={onSignUp} />
        <Text style={styles.terms}>
          By proceeding you are agreeing to the terms of service and privacy policy.
        </Text> 
        <Text style={[styles.label, styles.spacing]}>
          Already have an account?{' '}
          <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>
            Sign in
          </Text>        
        </Text>       
      </View>
    </SafeAreaView>
  );
};

SignUpScreen.PropTypes = {
  onSignUp: PropTypes.func,
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F3F3F3',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  terms: {
    color: '#666666',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 50,
    paddingHorizontal: 50,
  },
  label: {
    color: '#595959',
    fontSize: 16,
  },
  link: {
    color: '#9900ff',
  },
  input: {
    height: 50,
    width: 300,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#FFFFFF',
    backgroundColor: '#FFFFFF',
  },
  spacing: {
    marginBottom: 50,
  },
});

export default SignUpScreen;