import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const LandingScreen = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Landing Screen</Text>
      <Button
        title='Sign In'
        onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
};

LandingScreen.propTypes = {
  navigation: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
});

export default LandingScreen;