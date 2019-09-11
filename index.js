/**
 * @format
 */

import {AppRegistry} from 'react-native';
import CounterApp from './src/counter/CounterApp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => CounterApp);
