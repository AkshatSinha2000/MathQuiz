import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screen from './screen';
import Home from '../screen/home';
import QuestionPage from '../screen/qestionPage';
import Score from '../screen/score';
import participents from '../screen/participents';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screen.Home}
          component={Home}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name={screen.QuestionPage}
          component={QuestionPage}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name={screen.Score}
          component={Score}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name={screen.Participents}
          component={participents}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation