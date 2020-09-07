import React, { useContext } from 'react';
import { View, Button } from 'react-native';
import { signIn } from '../../services/auth'
import AuthContext from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const {signOut} = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="Logout" onPress={handleSignOut} />
    </View>
  )
};

export default Dashboard;