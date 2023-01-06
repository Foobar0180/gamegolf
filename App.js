import 'react-native-gesture-handler';
import React from 'react';
import { Button } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // apply safe area insets on content
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './src/components/LandingScreen/LandingScreen.component';
import SignInScreen from './src/components/SignInScreen/SignInScreen.component';
import PasswordResetScreen from './src/components/PasswordResetScreen/PasswordResetScreen.component';
import SignUpScreen from './src/components/SignUpScreen/SignUpScreen.component';
import SplashScreen from './src/components/SplashScreen/SplashScreen.component';
import HomeScreen from './src/components/HomeScreen/HomeScreen.component';

const RootStack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Landing">
          {isAuthenticated ? ( // switch navigation using conditional rendering
            <RootStack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerRight: () => <Button onPress={handleSignOut} title="Sign Out" />,
              }}
            />
          ) : (
            <>
              <RootStack.Screen
                name="Landing"
                component={LandingScreen}
                options={{
                  animationTypeForReplace: 'pop',
                  headerShown: false,
                }}
              />
              <RootStack.Screen name="SignIn">
                {(props) => <SignInScreen {...props} onSignIn={handleSignIn} />}
              </RootStack.Screen>
              <RootStack.Screen name="PasswordReset">
                {(props) => <PasswordResetScreen {...props} />}
              </RootStack.Screen>
              <RootStack.Screen name="SignUp">
                {(props) => <SignUpScreen {...props} onSignUp={handleSignIn} />}
              </RootStack.Screen>
              <RootStack.Screen 
                name="Splash"
                options={{
                  headerShown: false,
                }}>
                {(props) => <SplashScreen {...props} />}
              </RootStack.Screen>
            </>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}