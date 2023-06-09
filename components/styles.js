import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

// colors 
export const Colors = {
    primary: '#000000',
    secondary: '#E5E7EB',
    tertiary: '#1F2937',
    darkLight: '#9CA3AF',
    brand: '#6D28D9',
    green: '#19edd3',
    red: '#EF4444',
    sky: '#00ffd5',
    black: '#000000',
};

const { black, primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const KeyboardAvoidingView = styled.View`
    background-color: ${primary};
    flex: 1;
`;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 60}px;
    background-color: ${primary};
`;

export const StyledContainerLogin = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 70}px;
    background-color: ${primary};
`;

export const InnerContainer = styled.View`
    background-color: ${black};
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const WelcomContainer = styled(InnerContainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;
`;

export const PageLogo = styled.Image`
    width: 250px;
    height: 250px;
`;

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 10px;
`;
export const WelcomeImage = styled.Image`
    height: 50%;
    min-width: 100%;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${brand};
    padding: 10px;

    ${(props) => props.welcome && `
    font-size: 35px;
    `}

`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${green};

    ${(props) => props.welcome && `
      margin-bottom: 5px;
      font-weight: normal;
    `}


`;

export const StyledFromArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${tertiary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 20px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 7px;
    margin-bottom: 5px;
    color: ${green};
    
`;

export const StyledInputLabel = styled.Text`
    color: ${secondary};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon= styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    margin-vertical: 1px;
    height: 60px;

    ${(props) => props.google == true && `
      background-color: ${green};
      flex-direction: row;
      justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${secondary};
    font-size: 20px;
    font-weight: bold;

    ${(props) => props.google == true && `
      color: ${primary};
      padding-left: 30px;
    `}
`;

export const MsgBox = styled.Text`
    color: ${secondary};
    text-align: center;
    font-size: 13px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${secondary};
    font-size: 15px;
`;

export const TextLink = styled. TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px;
`;

