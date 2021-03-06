import React from 'react';
import Layout from './src/components/layout/layout';
import { StoreContextProvider } from './src/context/StoreContext';

export const wrapPageElement = ({ element, props }) => {
  return (
    <StoreContextProvider>
      <Layout {...props}>{element}</Layout>
    </StoreContextProvider>
  );
};
