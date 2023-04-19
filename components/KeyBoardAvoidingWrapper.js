import React, { Children } from "react";

import { ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Colors, KeyboardAvoidingView } from "./styles";

const KeyboardAvoidingWrapper = ({children}) => {
    return (
        <KeyboardAvoidingView>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
            </ScrollView>

        </KeyboardAvoidingView>
    );
}

export default KeyboardAvoidingWrapper;