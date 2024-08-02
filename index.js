/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';

// Home Page
// import App from './App';
import Home from './src/component/Home';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Home);
