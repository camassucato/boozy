/**
 * INDEX OF THE APPLICATION
 */
import React from 'react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig';
import Routes from './routes';
import { clrPrimary } from './constants/colorPalette';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={clrPrimary} />
      <Routes />
    </>
  );
}
