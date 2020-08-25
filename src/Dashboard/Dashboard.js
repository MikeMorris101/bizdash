import React from 'react';
import { Brand } from './Brand';
import { Container } from './Container';
import { GlobalStyle } from './GlobalStyle';
import { Card } from './Card';
import { Chart } from './Chart';
import { VirtualizedTable } from './Table';

export function Dashboard() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Brand />
        <Chart />
        <VirtualizedTable />
      </Container>
    </>
  );
}
