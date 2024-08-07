import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';
import { performSignOut } from '../../store/authSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';

const SettingsScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Container>
      <Text>Settings Screen</Text>
      <Button title="Sign out" onPress={() => dispatch(performSignOut())} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default SettingsScreen;
