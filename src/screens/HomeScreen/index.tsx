import React from 'react';
import styled from 'styled-components/native';

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <Title>Home Screen</Title>
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

export default HomeScreen;
