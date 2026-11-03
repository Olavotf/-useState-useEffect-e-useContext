import React from 'react';
import { TemaProvider } from './contexts/TemaContext';
import Home from './screens/Home';

export default function App() {
  return (
    <TemaProvider>
      <Home />
    </TemaProvider>
  );
}
