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
