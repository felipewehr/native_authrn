import React from 'react';
import { View, Button, Text } from 'react-native';
import {useAuth} from '../../contexts/auth';

const SignIn: React.FC = () => {
  const {signIn} = useAuth();

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  )
};

export default SignIn;