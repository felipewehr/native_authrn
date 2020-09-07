import React from 'react';
import { View, Button, Text } from 'react-native';
import { signIn } from '../../services/auth'
import {useAuth} from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const {signOut, user} = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{user?.name}</Text>
      <Button title="Logout" onPress={handleSignOut} />
    </View>
  )
};

export default Dashboard;