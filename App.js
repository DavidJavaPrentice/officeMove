import React from 'react';
import { Home } from './app/views/Home.js';
import { Exercise } from './app/views/Exercise.js';
import { Settings } from './app/views/Settings.js';
import { StackNavigator } from 'react-navigation';

const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Home
  },
  ExerciseRT: {
    screen: Exercise
  },
  SettingsRT: {
    screen: Settings
  }
},
  {
    initialRouteName: 'HomeRT'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}