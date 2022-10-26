import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/app.css';
import './app.i18n';
import AppRouter from './Router/AppRouter';
import { ComponentDimensionsProvider } from './context/ComponentDimensions/useComponentDimensionsContext';

export default function App() {
  return (
    <ChakraProvider>
      <ComponentDimensionsProvider>
        <AppRouter />
      </ComponentDimensionsProvider>
    </ChakraProvider>
  );
}
