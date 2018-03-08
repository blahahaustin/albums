// Import a library to help create a component.
import React from 'react';
import { Text } from 'react-native';
import { registerRootComponent } from 'expo';
import Header from './src/components/header';

// Create a component.
const App = () => (
    <Header />
);

// Render it to the device. This is Expo specific.
registerRootComponent(App);
