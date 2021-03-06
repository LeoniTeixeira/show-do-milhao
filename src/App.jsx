import React from 'react';
import GlobalProvider from './contexts/Global'
import ScreenSelector from './components/ScreenSelector'

export default function App() {
  return (
    <GlobalProvider>
      <ScreenSelector/>
    </GlobalProvider>
  );
} 