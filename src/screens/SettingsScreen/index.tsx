import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';

const SettingsScreen: React.FC = () => {
  return (
    <Container>
      <Text>Settings Screen</Text>
      <Button title="Sign out" onPress={() => console.log('Sign Out')} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default SettingsScreen;
