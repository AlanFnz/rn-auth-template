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
  background-color: #f8f9fa;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export default HomeScreen;
