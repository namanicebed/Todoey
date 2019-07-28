/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Login from './src/Login';
import Home from './src/Home';
import AddedHome from './src/AddedHome';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AddedHome);
