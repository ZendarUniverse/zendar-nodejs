import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

// formik
import { Formik } from 'formik';

// icons
import {Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

import {
    StyledContainerLogin,
    InnerContainer, 
    PageLogo, 
    PageTitle, 
    SubTitle, 
    StyledFromArea, 
    LeftIcon, 
    StyledInputLabel, 
    StyledTextInput, 
    RightIcon,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent,

} from './../components/styles';
import {TouchableNativeFeedbackComponent, View} from 'react-native';

// Colors
const {brand, darkLight, primary, secondary } = Colors;

// keybord avoiding view
import KeyboardAvoidingWrapper from '../components/KeyBoardAvoidingWrapper';

// API client


const Login = ({navigation}) => {

    const [hidePassword, setHidePassword] = useState(true);

    return (
        <KeyboardAvoidingWrapper>
        <StyledContainerLogin>
            <StatusBar style='light' />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/img/LoginLogo.png')} />
                
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate('Welcome');
                    }}
                >{({handleChange, handleBlur, handleSubmit, values }) => ( 
                <StyledFromArea>
                    <MyTextInput
                    //    label="Full Name"
                        icon="mail"
                        placeholder="Email"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                    />
                    <MyTextInput
                  //      label="Password"
                        icon="lock"
                        placeholder="Password"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    <MsgBox>(((￣(￣(￣▽￣)￣)￣)))</MsgBox>
                    <StyledButton onPress={handleSubmit}>
                        <ButtonText>Login</ButtonText>
                    </StyledButton>
                    <Line />
                    <StyledButton google={true} onPress={handleSubmit}>
                        <Fontisto name="google" color={primary} size={25} />
                        <ButtonText google={true}>Sign In with Google</ButtonText>
                    </StyledButton>
                    <ExtraView>
                        <ExtraText>Don't have an account already? </ExtraText>
                        <TextLink onPress={() => navigation.navigate('SignUp')}>
                            <TextLinkContent>SignUp</TextLinkContent>
                        </TextLink>
                    </ExtraView>
                </StyledFromArea> )}

                </Formik>
            </InnerContainer>
        </StyledContainerLogin>
        </KeyboardAvoidingWrapper>
    );
};


const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={25} color={darkLight} />
                </RightIcon>
            )}
        </View>
    );

};

export default Login;