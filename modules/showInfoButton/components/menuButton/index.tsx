import React, { FC, useCallback, } from 'react';
import { TouchableOpacity, Text, View, LayoutChangeEvent } from 'react-native';
import { styles } from './styles';

interface IProps {
    onPress: () => void;
}

export const MenuButton: FC<IProps> = ({ onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text>Call</Text>
            </TouchableOpacity >
        </View >
    )
};