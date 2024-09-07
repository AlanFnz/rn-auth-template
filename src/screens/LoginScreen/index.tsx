import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { performSignIn } from '../../store/authSlice';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Container>
      <Title>Login Screen</Title>
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
      <SignInButton onPress={() => dispatch(performSignIn(username, password))}>
        <SignInText>Sign In</SignInText>
      </SignInButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e2dbd0;
  padding: 0 6%;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #1f1b24;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: '#54565b',
  autoCapitalize: 'none',
})`
  height: 40px;
  background-color: #e2dbd0;
  border-color: #22262e;
  border-radius: 2px;
  border-width: 2px;
  margin-bottom: 12px;
  padding: 0 10px;
  width: 100%;
`;

export const SignInButton = styled.TouchableOpacity`
  width: 100%;
  background-color: #22262e;
  margin-top: 18px;
  padding-vertical: 10px;
  border-radius: 2px;
  border-width: 1px;
  border-color: #2e2b36;
  justify-content: center;
  align-items: center;
`;

export const SignInText = styled.Text`
  color: #e0e0e0;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`;

export default LoginScreen;
