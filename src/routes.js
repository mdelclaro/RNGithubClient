import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import ReadMe from '~/pages/ReadMe';
import BackButton from './components/BackButton';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          headerTransparent: true
        }
      },
      ReadMe: {
        screen: ReadMe,
        // navigationOptions: {
        //   headerTransparent: true
        // },
        headerLeft: BackButton
      }
    },
    {
      initialRouteName: 'Main'
    }
  )
);

export default Routes;
