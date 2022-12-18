/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AvatarImages from './src/Components/AvatarImages';
import MainRoot from './src/NavigationRoot/MainRoot';

AppRegistry.registerComponent(appName, () => MainRoot);
