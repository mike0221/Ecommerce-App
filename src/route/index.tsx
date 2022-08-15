import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeStack from './appStack';


const RouteApp = () => {
  return (
    <PaperProvider>
    <NavigationContainer>
        <HomeStack></HomeStack>
    </NavigationContainer>
    </PaperProvider>
  );
}

export default RouteApp