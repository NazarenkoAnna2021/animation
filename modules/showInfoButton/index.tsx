import React from "react";
import { SafeAreaView } from "react-native";
import { PhoneBlock } from "./components/phoneBlock";
import { styles } from "./styles";

export const ShowInfoButton = () => {
    return (
        <SafeAreaView style={styles.container}>
            <PhoneBlock />
        </SafeAreaView>
    );
}

