import React from 'react';
import { Title } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { performSignOut } from '../../store/auth-slice';
import { AppDispatch } from '../../store';
import { Container, SignOutButton, SignOutText } from './settings.styled';

export const Settings: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSignOut = () => {
    dispatch(performSignOut());
  };

  return (
    <Container>
      <Title>Settings</Title>
      <SignOutButton onPress={handleSignOut}>
        <SignOutText>Sign Out</SignOutText>
      </SignOutButton>
    </Container>
  );
};
