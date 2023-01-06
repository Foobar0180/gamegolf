import React from 'react';
import { SafeAreaView, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';

const SignInScreen = ({ onSignIn, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput
          style={styles.input}
          maxLength={100}
          placeholder="Username or email address"
          placeholderTextColor="#666666"
        />
        <TextInput 
          style={styles.input} 
          secureTextEntry={true}
          placeholder="Password" 
          maxLength={16}
          placeholderTextColor="#666666" />
        <Button title="Sign In" onPress={onSignIn} />
        <Text style={styles.terms}>
          By proceeding you are agreeing to the terms of service and privacy policy.
        </Text>
        <Text style={[styles.label, styles.spacing]}>
          Forgot your{' '}
          <Text style={styles.link} onPress={() => navigation.navigate('PasswordReset')}>
            password
          </Text>
          ?
        </Text>
        <Text style={styles.label}>
          Not a member yet?{' '}
          <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
            Create an account
          </Text>
          .
        </Text>
        <Text style={styles.version}>Version: 2021.16.0.8281</Text>
      </View>
    </SafeAreaView>
  );
};

SignInScreen.propTypes = {
  onSignIn: PropTypes.func,
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
  version: {
    position: 'absolute',
    bottom: 0,
    fontSize: 12,
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

export default SignInScreen;
