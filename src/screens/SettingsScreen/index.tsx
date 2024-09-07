import React from 'react';
import { performSignOut } from '../../store/authSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { Container, SignOutButton, SignOutText } from './styles';
import { Title } from 'react-native-paper';

const SettingsScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Container>
      <Title>Settings</Title>
      <SignOutButton onPress={() => dispatch(performSignOut())}>
        <SignOutText>Sign Out</SignOutText>
      </SignOutButton>
    </Container>
  );
};

export default SettingsScreen;
