import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen')

export const styles = StyleSheet.create({
    container: {
        width,
        alignItems: 'center',
    },
    text: {
        color: '#000',
    }
});
