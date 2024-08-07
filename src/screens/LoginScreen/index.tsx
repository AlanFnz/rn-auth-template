import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Button, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { performSignIn } from '../../store/authSlice';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();

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
        onPress={() => dispatch(performSignIn(username, password))}
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
