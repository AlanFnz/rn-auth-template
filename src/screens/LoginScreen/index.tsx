import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Text>Login Screen</Text>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Sign in"
        onPress={() => {
          console.log('Sign In');
        }}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  height: 40px;
  border-color: gray;
  border-width: 1px;
  margin-bottom: 12px;
  padding: 0 10px;
  width: 80%;
`;

export default LoginScreen;
