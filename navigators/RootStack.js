import React from 'react';

import {Colors} from './../components/styles';
const {primary, tertiary, secondary} = Colors;

//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Login from './../screens/Login';
import Signup from './../screens/SignUp';
import Welcome from './../screens/Welcome';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: 
                        {
                            backgroundColor: 'transparent'
                        },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    }


                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen options={{headerTintColor: secondary,}} name="SignUp" component={Signup} />
                <Stack.Screen options={{headerTintColor: secondary,}} name="Welcome" component={Welcome} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;