import React from 'react';
import { StatusBar } from 'expo-status-bar';


import {
    InnerContainer,
    PageTitle, 
    SubTitle, 
    StyledFromArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomContainer,
    WelcomeImage,
    Avatar,

} from './../components/styles';



const Welcome = ({navigation}) => {

    return (
        <>
            <StatusBar style='light' />
            <InnerContainer>
                <WelcomeImage resizeMode="center" source={require('./../assets/img/img2.png')} />
                <WelcomContainer>
                <PageTitle welcome={true}>Welcome to</PageTitle>
                <PageTitle welcome={true}>Zendar Universe</PageTitle>
                <SubTitle welcome={true}>Matrix Leon</SubTitle>
                <SubTitle welcome={true}>matrixleon@gmail.com</SubTitle>
                <StyledFromArea>
                    <Line />
                    <Avatar resizeMode="cover" source={require('./../assets/img/img1.png')} />
                    <StyledButton onPress={() => {navigation.navigate('Login')}}>
                        <ButtonText>Logout</ButtonText>
                    </StyledButton>
                    </StyledFromArea>

                </WelcomContainer>
            </InnerContainer>
        </>
    );
}

export default Welcome;