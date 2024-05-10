// import { createStackNavigator } from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
// import LogoPage from '../screens/logoPage';
// import LoginPage from '../screens/loginPage';

// const screens = {
//     LogoPage: {
//         screen: LogoPage
//     },
//     LoginPage: {
//         screen: LoginPage
//     }
// }

// const LogoPageStack = createStackNavigator(screens);

// export default createAppContainer(LogoPageStack);

import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from '../screens/loginPage';

const LoginPageRoutes = createStackNavigator({
        Login: {
        screen: LoginPage,
        navigationOptions: {
            title: 'Login Page',
        },
    },
});

export default LoginPageRoutes;
